<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VisitorController extends Controller
{
    public function index()
    {
    $chartOnsiteVisitorData =  \App\Models\Visitor::where('date', '>=', now()->subMonth())
        ->where('type', 'onsite')
        ->orderBy('date')
        ->get()->map(function($item){
            $item->date = \Carbon\Carbon::parse($item->date)->format('d/m/Y');
            return $item;
        });
    $chartOnlineVisitorData =  \App\Models\Visitor::where('date', '>=', now()->subMonth())
        ->where('type', 'online')
        ->orderBy('date')
        ->get()->map(function($item){
            $item->date = \Carbon\Carbon::parse($item->date)->format('d/m/Y');
            return $item;
        });

        
        return view('landing-page.visitor')->with(compact('chartOnsiteVisitorData', 'chartOnlineVisitorData'));
    }
}
