<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user' => 'string|max:255|exists:roles,name',
            'category' => 'string|max:255|exists:categories,slug',
        ]);
        
        if ($validator->fails()) {
            abort(403, 'Forbidden');
        }
        
        $validatedData = $validator->validated();

        $articles = Article::with(['comments', 'user.roles', 'category'])
                                ->where('status', Article::ARTICLE_PUBLISHED)
                                ->where('approval_status', Article::APPROVAL_APPROVE)
                                ->orderByDesc('created_at')
                                ->orderByDesc('featured');

        // $filterAuthor = User::whereHas('article');
        $dropDownDataUsers = $articles->get()->map(function ($article) {
            return $article->user ? $article->user->getRoleNames() : '-';
        })->unique()->pluck(0)->toArray();
        $dropDownDataCategories = $articles->get()->map->category->unique();

        if ($request->user) {
            if(Role::where('name', $request->user)->first() == null) {
                return abort(403, 'Forbidden');
            }

            $articles = $articles->whereHas('user', function($query) use ($request) {
                $query->role($request->user == 'admin' ? 'admin' : 'member');
            });
        }

        if ($request->category) {
            if(Category::where('slug', $request->category)->first() == null) {
                return abort(403, 'Forbidden');
            }
            $article = $articles->whereRelation('category', 'slug', $request->category);
        }

        $articles = $articles->paginate(9);

        return view('landing-page.blog.index', compact('articles', 'dropDownDataUsers', 'dropDownDataCategories'));
    }

    public function detail($slug)
    {
        $article = Article::where('slug', '=', $slug)
            ->where('approval_status', Article::APPROVAL_APPROVE)
            ->where('status', '=', Article::ARTICLE_PUBLISHED)
            ->firstOrFail();
        $categories = Category::all();
        $latest_article = Article::where('status', '=', Article::ARTICLE_PUBLISHED)
            ->where('approval_status', Article::APPROVAL_APPROVE)
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get();
        $latest_article = $latest_article->sortByDesc(function ($item) {
            return $item->featured;
        });


        return view('landing-page.blog.detail', compact('article', 'categories', 'latest_article'));
    }

    public function storeReport(Request $request, $id)
    {
        $request->validate([
            'article_id' => 'required',
            'reason' => 'required',
            'captcha' => 'required|captcha'
        ], [
            'captcha.required' => 'Kode captcha wajib diisi.',
            'captcha.captcha' => 'Kode captcha salah, silakan coba lagi.'
        ]);

        $newReport = new Report;
        $newReport->reason = $request->reason;
        $newReport->status = Report::STATUS_WAITING;
        $newReport->user_id = $request->user_id;
        $newReport->article_id = $request->article_id;
        $newReport->save();

        return response()->json([
            'status' => 'success'
        ], 200);
    }
}
