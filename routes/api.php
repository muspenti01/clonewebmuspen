<?php

use App\Http\Controllers\API\V1\Guestbook\GuestBookController;
use App\Http\Controllers\API\V1\Guestbook\SurveyController;
use App\Http\Controllers\API\V2\Guestbook\GuestBookController as v2GuestBookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::get('/guestbooks', [GuestBookController::class, 'index'])->name('api.guestbooks');
    Route::post('/guestbook', [GuestBookController::class, 'store'])->name('api.guestbook.store');
    Route::post('/guestbook/destroy/{guestBook}', [GuestBookController::class, 'destroy'])->name('api.guestbook.destroy');

    Route::get('/surveys/{guestBook?}', [SurveyController::class, 'index'])->name('api.surveys');
    Route::post('/survey', [SurveyController::class, 'store'])->name('api.survey.store');
    Route::post('/survey/destroy/{survey}', [SurveyController::class, 'destroy'])->name('api.survey.destroy');

    Route::get('/collection', [\App\Http\Controllers\API\V1\CollectionController::class, 'index']);
    Route::get('/collection/id/{id}', [\App\Http\Controllers\API\V1\CollectionController::class, 'show']);
    Route::get('/collection/categories', [\App\Http\Controllers\API\V1\CollectionController::class, 'getAllCategory']);
    Route::get('/collection/category/{category_id}', [\App\Http\Controllers\API\V1\CollectionController::class, 'getByCategory']);

    Route::get('/cms-app', [\App\Http\Controllers\API\V1\CmsApplicationController::class, 'getAllApplications']);
    Route::get('/cms-app-with-content', [\App\Http\Controllers\API\V1\CmsApplicationController::class, 'getAllApplicationWithContents']);
    Route::get('/cms-app-by-id-with-content', [\App\Http\Controllers\API\V1\CmsApplicationController::class, 'getAllApplicationByIdWithContent']);
    Route::get('/cms-app-content', [\App\Http\Controllers\API\V1\CmsApplicationController::class, 'getContentById']);
});

Route::prefix('v2')->name('v2.')->group(function () {
    Route::post('/guestbook', [v2GuestBookController::class, 'store'])->name('api.guestbook.store');
});

