<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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

Route::group(['prefix' => 'v1'], function () {
    Route::group(['prefix' => 'admin'], function () {
    Route::group(['prefix' => 'tutoring'], function () {
        Route::group(['prefix' => 'subject'], function () {   
            Route::get('/viewTutoringSubjects', [TutoringController::class,'viewTutoringSubjects']);
            Route::post('/addTutoringSubject', [TutoringController::class,'addTutoringSubject']);
            Route::post('/deleteTutoringSubject', [TutoringController::class,'deleteTutoringSubject']);
            
 
        });   
        Route::group(['prefix' => 'session'], function () {
            Route::get('/viewTutoringSessions', [TutoringController::class,'viewTutoringSessions']);
            Route::post('/addTutoringSession', [TutoringController::class,'addTutoringSession']);
            Route::post('/deleteTutoringSession', [TutoringController::class,'deleteTutoringSession']);
            Route::post('/setTutoringSession', [TutoringController::class,'setTutoringSession']); 
            //get id of session to edit
            //confirm tutoring session ??
    
 
        });
    });
});
});