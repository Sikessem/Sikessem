<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LanguageController;
use Illuminate\Support\Facades\Route;

Route::view('/auth', 'auth.index')->name('auth.index');
Route::post('/auth', AuthController::class)->name('auth');

Route::get('lang/{locale}', [LanguageController::class, 'swap'])->name('lang');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
