<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LanguageController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Vite;

Route::get('logo', fn() => '<img src="'.Vite::asset('src/images/logo.svg').'" alt="'.config('app.title').'"/>')->name('logo');

Route::view('auth', 'auth.index')->name('auth');
Route::post('auth', AuthController::class);

Route::get('lang/{locale}', [LanguageController::class, 'swap'])->name('lang');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
