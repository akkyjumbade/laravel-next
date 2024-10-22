<?php

use App\Http\Controllers\Cp\ResourceController;
use App\Http\Controllers\Cp\SettingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::prefix('cp')->as('cp.')->group(function () {
        Route::get('/resources', [ResourceController::class, 'index'])->name('resources');
    });
    Route::prefix('settings')->group(function () {
        Route::get('/', [ProfileController::class, 'settings'])->name('settings');
        Route::get('/{type}', [SettingController::class, 'settings'])->name('settings');
    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/notifications', [ProfileController::class, 'notifications'])->name('notifications');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
