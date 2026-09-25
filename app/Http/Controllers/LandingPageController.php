<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Booking;
use App\Models\Collection;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\TvLink;
use App\Models\Update;
use App\Models\Visitor;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index(){
        $collections = Collection::where('status','=', Collection::STATUS_PUBLISH)
            ->orderBy('created_at','desc')->take(6)->get();

        $events = Event::where('status','=',Event::STATUS_PUBLISH)
            ->orderBy('created_at','desc')->get();

        $articles = Article::where('status','=',Article::ARTICLE_PUBLISHED)
        ->where('approval_status', Article::APPROVAL_APPROVE)

            ->limit(3)->get();

        $galleries = Gallery::limit(4)->get();

        $tvlinks = TvLink::limit(4)->get();

        $updates = Update::orderBy('created_at','desc')->get();

        $collections_json = $collections->toJson();

        // $online_visitor = Booking::whereMonth('created_at', Carbon::now()->month)->get();

        $online_visitor = Visitor::where('type', 'online')
            ->where('created_at', '>=', now()->startOfYear())
            ->where('created_at', '<=', now()->endOfYear())
            ->get()->sum('amount');

        $onsite_visitor = Visitor::where('type', 'onsite')
            ->where('created_at', '>=', now()->startOfYear())
            ->where('created_at', '<=', now()->endOfYear())
            ->get()->sum('amount');
        
        
        // $offline_visitor = Http::get('muspenguestsurvey.invm.info/api/guest')->json($key = null);

        return view('landing-page.index',compact('updates', 'collections','events', 'articles', 'galleries', 'tvlinks', 'collections_json', 'online_visitor', 'onsite_visitor'));
    }
}
