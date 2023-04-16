<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
    Route::group(['prefix' => 'tutoring'], function () {
        Route::group(['prefix' => 'subject'], function () {   
            Route::get('/viewTutoringSubjects', [TutoringController::class,'viewTutoringSubjects']);
            Route::post('/addTutoringSubject', [TutoringController::class,'addTutoringSubject']);
            Route::post('/deleteTutoringSubject', [TutoringController::class,'deleteTutoringSubject']);
            Route::post('/setTutoringSubject', [TutoringController::class,'setTutoringSubject']); //get id of class
 
        });   
        Route::group(['prefix' => 'session'], function () {
            Route::get('/viewTutoringSessions', [TutoringController::class,'viewTutoringSessions']);
            Route::post('/addTutoringSession', [TutoringController::class,'addTutoringSession']);
            Route::post('/deleteTutoringSession', [TutoringController::class,'deleteTutoringSession']);
            //confirm tutoring session ??
    
 
        });
    });
});