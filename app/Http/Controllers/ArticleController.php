<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class ArticleController extends Controller
{
    /**
     * Display a listing of forum articles with secure filtering and pagination.
     *
     * @param Request $request
     * @return \Illuminate\View\View|\Illuminate\Http\RedirectResponse
     */
    public function index(Request $request)
    {
        // 1. Validasi & Sanitasi Parameter Input GET secara Ketat
        $validator = Validator::make($request->query(), [
            'user'     => 'nullable|string|in:admin,member',
            'category' => ['nullable', 'string', 'max:100', 'regex:/^[a-zA-Z0-9_\-]+$/'],
            'page'     => 'nullable|integer|min:1',
        ]);

        // Jika terdeteksi input manipulasi/fuzzing/injeksi yang tidak sesuai schema,
        // redirect secara aman ke URL forum bersih (mencegah diferensiasi error 403 / respons tak terduga)
        if ($validator->fails()) {
            return redirect()->route('index.forum');
        }

        try {
            // 2. Strict Type Casting untuk Parameter 'page' (Mencegah Blind SQLi & Integer Overflow)
            $currentPage = $request->has('page') ? max(1, (int) $request->query('page')) : 1;

            // 3. Bangun Base Query dengan Eloquent ORM (Otomatis PDO Prepared Statements & Parameter Binding)
            $articlesQuery = Article::with(['comments', 'user.roles', 'category'])
                ->where('status', Article::ARTICLE_PUBLISHED)
                ->where('approval_status', Article::APPROVAL_APPROVE)
                ->orderByDesc('created_at')
                ->orderByDesc('featured');

            // 4. Filter User/Role Menggunakan Whitelist Ketat
            if ($request->filled('user') && in_array($request->query('user'), ['admin', 'member'], true)) {
                $roleName = (string) $request->query('user');
                $articlesQuery->whereHas('user', function ($query) use ($roleName) {
                    $query->role($roleName);
                });
            }

            // 5. Filter Kategori Menggunakan Parameterized Query via Eloquent
            if ($request->filled('category')) {
                $categorySlug = (string) $request->query('category');
                $articlesQuery->whereRelation('category', 'slug', $categorySlug);
            }

            // 6. Eksekusi Pagination dengan Parameter 'page' yang Sudah Divalidasi
            $articles = $articlesQuery->paginate(9, ['*'], 'page', $currentPage);

            // Data pendukung dropdown filter
            $dropDownDataUsers = ['admin', 'member'];
            $dropDownDataCategories = Category::all();

            return view('landing-page.blog.index', compact('articles', 'dropDownDataUsers', 'dropDownDataCategories'));
        } catch (\Throwable $e) {
            // 7. Penanganan Error Generik: Log internal untuk audit dev/secops, jangan pernah bocorkan detail SQL ke klien
            Log::error('Database/System exception on forum index: ' . $e->getMessage(), [
                'exception' => $e,
                'request_params' => $request->query(),
            ]);

            abort(500, 'Terjadi kesalahan pada sistem. Silakan coba beberapa saat lagi.');
        }
    }

    /**
     * Display article detail by slug.
     *
     * @param string $slug
     * @return \Illuminate\View\View
     */
    public function detail($slug)
    {
        // Validasi format slug agar bebas dari karakter berbahaya
        if (!is_string($slug) || !preg_match('/^[a-zA-Z0-9_\-]+$/', $slug)) {
            abort(404, 'Artikel tidak ditemukan.');
        }

        try {
            $article = Article::where('slug', '=', $slug)
                ->where('approval_status', Article::APPROVAL_APPROVE)
                ->where('status', '=', Article::ARTICLE_PUBLISHED)
                ->firstOrFail();

            $categories = Category::all();
            $latest_article = Article::where('status', '=', Article::ARTICLE_PUBLISHED)
                ->where('approval_status', Article::APPROVAL_APPROVE)
                ->orderBy('created_at', 'desc')
                ->limit(3)
                ->get()
                ->sortByDesc('featured');

            return view('landing-page.blog.detail', compact('article', 'categories', 'latest_article'));
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            abort(404, 'Artikel tidak ditemukan.');
        } catch (\Throwable $e) {
            Log::error('Exception on article detail: ' . $e->getMessage(), [
                'slug' => $slug
            ]);
            abort(500, 'Terjadi kesalahan saat memuat artikel.');
        }
    }

    /**
     * Store article report.
     *
     * @param Request $request
     * @param mixed $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeReport(Request $request, $id)
    {
        $request->validate([
            'article_id' => 'required|integer',
            'reason'     => 'required|string|max:1000',
            'captcha'    => 'required|captcha'
        ], [
            'captcha.required' => 'Kode captcha wajib diisi.',
            'captcha.captcha'  => 'Kode captcha salah, silakan coba lagi.'
        ]);

        try {
            $newReport = new Report;
            $newReport->reason = strip_tags($request->reason);
            $newReport->status = Report::STATUS_WAITING;
            $newReport->user_id = auth()->id() ?? $request->user_id;
            $newReport->article_id = (int) $request->article_id;
            $newReport->save();

            return response()->json([
                'status' => 'success'
            ], 200);
        } catch (\Throwable $e) {
            Log::error('Exception on storing article report: ' . $e->getMessage());
            return response()->json([
                'status'  => 'error',
                'message' => 'Gagal mengirim laporan.'
            ], 500);
        }
    }
}
