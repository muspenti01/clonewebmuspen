<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\CollectionCategory;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function index(){
        $collections = Collection::where('status','=',Collection::STATUS_PUBLISH);
        if($cat = request()->query('category')) {
            if(CollectionCategory::where('slug', request()->query('category'))->first() == null) {
                return abort(404, 'Category not found');
            }
            $collections = $collections->whereHas('category', function($q) use ($cat) {
                return $q->whereSlug($cat);
            });
        }

        if($que = request()->query('query')) {
            $collections = $collections->where('title', 'LIKE', '%'.$que.'%');
        }
        $collections = $collections->paginate(9);
        $collection_categories = CollectionCategory::get();
        return view('landing-page.collection.index', compact('collections', 'collection_categories'));
    }

    public function detail($slug){
        $collection = Collection::whereSlug($slug)->where('status','=',Collection::STATUS_PUBLISH)->firstOrFail();
        return view('landing-page.collection.detail', compact('collection'));

    }
}
