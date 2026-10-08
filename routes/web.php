<?php

use App\Http\Controllers\LandingPageController;
use App\Models\Collection;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[LandingPageController::class,'index']);

Route::get('/teams', function (){
    $teams = \App\Models\Team::all();
    $partners = \App\Models\Partner::all();
    return view('landing-page.teams',compact('teams','partners'));
});

Route::get('/organization-structure', function (){
    $teams = \App\Models\Team::all();
    return view('landing-page.organization-structure',compact('teams'));
});

Route::get('/partners', function (){
    $partners = \App\Models\Partner::all();
    return view('landing-page.partners',compact('partners'));

});

Route::get('/vision-mission', function (){
    return view('landing-page.vision-mission');
});

Route::get('/contact', function (){
    return view('landing-page.contact');
});

Route::get('/profile', function (){
    return view('landing-page.profile');
});

Route::get('/vision-mission', function (){
    return view('landing-page.vision-mission');
});

Route::get('/virtual-tour', function (){
    return view('landing-page.3d-maps');
});

Route::get('/about-us', function (){
    $teams = \App\Models\Team::all();
    $partners = \App\Models\Partner::all();
    $collections = Collection::where('status','=', Collection::STATUS_PUBLISH)
            ->orderBy('created_at','desc')->take(6)->get();

    return view('landing-page.about-us',compact('teams','partners', 'collections'));
});

Route::get('/saran-aduan',[\App\Http\Controllers\ComplainController::class,'index']);
Route::get('/complain-form',[\App\Http\Controllers\ComplainController::class,'form']);

Route::post('/complain',[\App\Http\Controllers\ComplainController::class,'storeComplain'])->middleware('throttle:3,1');


Route::get('/forum', [\App\Http\Controllers\ArticleController::class,'index'])->name('index.forum');
Route::get('/forum/{slug}', [\App\Http\Controllers\ArticleController::class,'detail'])->name('detail.forum');
Route::post('/forum/{id}/report', [\App\Http\Controllers\ArticleController::class,'storeReport'])->middleware('throttle:3,1')->name('report.forum');

Route::post('/forum/{slug}/comment', [\App\Http\Controllers\CommentController::class,'store'])
    ->middleware('throttle:3,1')
    ->name('store.comment');

Route::get('/collections',[\App\Http\Controllers\CollectionController::class,'index']);
Route::get('/collections/{slug}',[\App\Http\Controllers\CollectionController::class,'detail'])->name('detail.collection');

Route::get('/events',[\App\Http\Controllers\EventController::class,'index']);
Route::get('/events/{slug}',[\App\Http\Controllers\EventController::class,'detail'])->name('detail.event');
Route::get('/events-json', [\App\Http\Controllers\EventController::class,'eventJson'])->name('event.json');
Route::get('/event/schedule', [\App\Http\Controllers\EventController::class,'getEventSchedule'])->name('event.schedule');

Route::get('/museum', [\App\Http\Controllers\EventController::class,'getMuseumCapacity'])->name('museum');

Route::get('/booking', [\App\Http\Controllers\EventController::class,'booking']);
Route::get('/booking-form/{id}', [\App\Http\Controllers\EventController::class,'formBookingEvent']);

Route::post('/booking', [\App\Http\Controllers\EventController::class,'storeBooking'])->middleware('throttle:3,1')->name('storeBooking');
Route::get('/booking-json', [\App\Http\Controllers\EventController::class,'getBooking'])->name('booking.json');

Route::get('/guest-book', [\App\Http\Controllers\GuestBookController::class,'index'])->name('guest_book');
Route::post('/guest-book/attend', [\App\Http\Controllers\GuestBookController::class,'create'])->middleware('throttle:3,1')->name('guest_book.attend');

Route::get('/visitor', [\App\Http\Controllers\VisitorController::class, 'index'])->name('visitor');

Route::get('/.well-known/security.txt', function () {
    $path = public_path('.well-known/security.txt');
    if (file_exists($path)) {
        return response()->file($path, ['Content-Type' => 'text/plain; charset=utf-8']);
    }
    return response("Contact: mailto:muspen@komdigi.go.id\nExpires: 2027-12-31T23:59:59.000Z\nPreferred-Languages: id, en\nCanonical: https://muspen.komdigi.go.id/.well-known/security.txt\n", 200, ['Content-Type' => 'text/plain; charset=utf-8']);
});

// Route::get('auth/google', [\App\Http\Controllers\GoogleController::class, 'redirect'])->name('login.google');
// Route::get('auth/google/callback', [\App\Http\Controllers\GoogleController::class, 'callback']);

