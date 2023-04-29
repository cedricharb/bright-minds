<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\TutoringController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\CampController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::prefix('chat')->group(function () {
        Route::get('/', [ChatbotController::class, 'openChat']);
        Route::post('/review', [ChatbotController::class, 'sendFeedback']);
    });
    
});