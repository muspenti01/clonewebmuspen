<?php

use Illuminate\Support\Facades\Route;

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix'     => config('backpack.base.route_prefix', 'admin'),
    'middleware' => array_merge(
        (array) config('backpack.base.web_middleware', 'web'),
        (array) config('backpack.base.middleware_key', 'admin'),
    ),
    'namespace'  => 'App\Http\Controllers\Admin',
], function () { // custom admin routes
    Route::middleware(['role:admin'])->group(function () {
        Route::crud('gallery', 'GalleryCrudController');
        Route::crud('team', 'TeamCrudController');
        Route::crud('collection', 'CollectionCrudController');
        Route::crud('partner', 'PartnerCrudController');
        Route::crud('event', 'EventCrudController');
        Route::get('report/{id}/approve', 'ReportCrudController@approve');
        Route::crud('comment', 'CommentCrudController');
        Route::crud('booking', 'BookingCrudController');
        Route::crud('booking-place', 'BookingPlaceCrudController');
        Route::crud('setting', 'SettingCrudExtendedController');
        Route::crud('social-media', 'SettingSocialMediaController');
        Route::crud('web-info', 'SettingWebInfoController');
        Route::crud('approval', 'ApprovalCrudController');
        Route::get('approval/{id}/approve', 'ApprovalCrudController@approveArticle');
        // Route::get('approval/{id}/reject', 'ApprovalCrudController@rejectArticle');
    });
    Route::crud('report', 'ReportCrudController');

//    Route::middleware(['role:member'])->group(function () {
//        Route::crud('report', 'ReportCrudController');
//    });

    Route::crud('complaint', 'ComplaintCrudController');
    Route::crud('tv-link', 'TvLinkCrudController');
    Route::crud('offline-visitor', 'OfflineVisitorCrudController');
    Route::crud('api-survey', 'ApiSurveyCrudController');
    Route::crud('offline-survey', 'OfflineSurveyCrudController');
    Route::crud('update', 'UpdateCrudController');
    Route::crud('collection-category', 'CollectionCategoryCrudController');
    Route::crud('guest-book', 'GuestBookCrudController');
    Route::crud('online-visitor', 'OnlineVisitorCrudController');
    Route::crud('onsite-visitor', 'OnsiteVisitorCrudController');
    Route::crud('monthly-visitor-chart', 'MonthlyVisitorChartCrudController');
    Route::crud('reservation-approval', 'ReservationApprovalCrudController');
    Route::crud('cms-category', 'CmsCategoryCrudController');
    Route::crud('cms-location', 'CmsLocationCrudController');
    Route::crud('cms-tag', 'CmsTagCrudController');
    Route::crud('cms-application', 'CmsApplicationCrudController');
    Route::crud('cms-application/{app}/content', 'CmsAppContentCrudController');
}); // this should be the absolute last line of this file