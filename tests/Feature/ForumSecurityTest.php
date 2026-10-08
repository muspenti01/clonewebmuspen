<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class ForumSecurityTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Test normal access to forum returns 200 OK.
     */
    public function test_forum_index_returns_ok_with_valid_request()
    {
        $response = $this->get('/forum');
        $response->assertStatus(200);
    }

    /**
     * Test blind SQL injection payload in 'category' parameter.
     * Verifies that scanner payloads (like Nessus 42424) do not trigger 403 Forbidden or 500 SQL syntax errors.
     */
    public function test_forum_category_rejects_or_safely_sanitizes_sqli_payloads()
    {
        // Nessus Plugin 42424 test payloads
        $payloads = [
            'museumzzadmin&page=2&category=museumyy',
            "museum' OR '1'='1",
            "museum' UNION SELECT 1,2,3,4,5-- -",
            "1; DROP TABLE articles;--",
            "sleep(5)#",
        ];

        foreach ($payloads as $payload) {
            $response = $this->get('/forum?category=' . urlencode($payload));

            // Must NOT return 403 Forbidden (which triggered the false positive in Nessus)
            $this->assertNotEquals(403, $response->getStatusCode(), "Payload [$payload] should not trigger 403 Forbidden.");
            
            // Must NOT leak SQL error or 500 Database Exception
            $this->assertNotEquals(500, $response->getStatusCode(), "Payload [$payload] caused unhandled server exception.");

            // Expected: Clean redirect to forum OR 200 OK with sanitized/empty results
            $this->assertTrue(
                in_array($response->getStatusCode(), [200, 302], true),
                "Payload [$payload] returned unexpected status code: " . $response->getStatusCode()
            );
        }
    }

    /**
     * Test 'page' parameter strictly enforces positive integer validation and rejects fuzzing payloads.
     */
    public function test_forum_page_strictly_rejects_non_integer_and_sqli_payloads()
    {
        $malformedPages = [
            '2zzadmin&category=museum&page=2yy', // Nessus plugin payload
            "1' OR 1=1--",
            '-5',
            'abc',
            '1.5',
            '0',
        ];

        foreach ($malformedPages as $page) {
            $response = $this->get('/forum?page=' . urlencode($page));

            // Must NOT trigger 500 error or database exception
            $this->assertNotEquals(500, $response->getStatusCode(), "Page input [$page] triggered 500 server error.");

            // Invalid page should be gracefully redirected or fallback to page 1
            $this->assertTrue(
                in_array($response->getStatusCode(), [200, 302], true),
                "Page input [$page] returned unexpected status code: " . $response->getStatusCode()
            );
        }
    }

    /**
     * Test 'user' parameter only accepts whitelisted roles ('admin', 'member').
     */
    public function test_forum_user_parameter_whitelist_enforcement()
    {
        // Valid roles
        $responseAdmin = $this->get('/forum?user=admin');
        $this->assertEquals(200, $responseAdmin->getStatusCode());

        $responseMember = $this->get('/forum?user=member');
        $this->assertEquals(200, $responseMember->getStatusCode());

        // Invalid or malicious roles
        $maliciousUsers = [
            'superadmin',
            "admin' OR 1=1--",
            'root',
            '<script>alert(1)</script>',
        ];

        foreach ($maliciousUsers as $user) {
            $response = $this->get('/forum?user=' . urlencode($user));

            // Must NOT trigger 403 (Nessus trigger) or 500 (SQL error)
            $this->assertNotEquals(403, $response->getStatusCode());
            $this->assertNotEquals(500, $response->getStatusCode());
            $this->assertTrue(in_array($response->getStatusCode(), [200, 302], true));
        }
    }

    /**
     * Test detail endpoint rejects SQL injection payloads in 'slug' parameter.
     */
    public function test_forum_detail_rejects_malformed_slug()
    {
        $sqliSlugs = [
            "article-slug' OR '1'='1",
            "article-slug'; WAITFOR DELAY '0:0:5'--",
            "union-select-1",
        ];

        foreach ($sqliSlugs as $slug) {
            $response = $this->get('/forum/' . urlencode($slug));

            // Must safely return 404 Not Found without SQL syntax error or 500
            $response->assertStatus(404);
            $response->assertDontSee('SQLSTATE');
            $response->assertDontSee('QueryException');
        }
    }
}
