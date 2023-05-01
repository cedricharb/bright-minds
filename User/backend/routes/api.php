<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\TutoringController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    Route::prefix('chat')->group(function () {
        Route::get('/', [ChatbotController::class, 'openChat']);
        Route::post('/review', [ChatbotController::class, 'sendFeedback']);
    });
    Route::prefix('about')->group(function () {
        Route::get('/', [InfoController::class, 'getInfo']);
        Route::put('/edit', [InfoController::class, 'updateInfo']);
    });
    Route::prefix('tutoring')->group(function () {
        Route::get('/', [TutoringController::class, 'getSubjects']);
        Route::get('/schedule', [TutoringController::class, 'getSchedule']);
        Route::post('/session', [TutoringController::class, 'postSession']);
    });
});
