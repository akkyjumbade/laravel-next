<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * Read more at https://laravel.com/docs/11.x/sanctum
 */

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
