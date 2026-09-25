<?php


Route::group([
    'prefix' => config('backpack.base.route_prefix', 'admin'),
    'middleware' => ['web', 'admin'],
], function () {
    Route::crud('article', '\App\Http\Controllers\Admin\ArticleCrudController');
    Route::crud('category', 'Backpack\NewsCRUD\app\Http\Controllers\Admin\CategoryCrudController');
    Route::crud('tag', 'Backpack\NewsCRUD\app\Http\Controllers\Admin\TagCrudController');
});
