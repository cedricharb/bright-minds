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
    Route::group(['prefix' => 'admin'], function () {
      Route::group([
        'middleware' => 'api',
        'prefix' => 'auth'], function () {
        /* Authentication Routes */
        Route::post('/refresh', [AuthController::class,'refresh']);
        Route::post('/login', [AuthController::class,'login']);
        Route::post('/logout', [AuthController::class,'logout']);
        Route::post('/changePassword', [AuthController::class,'changePassword']);
    //api worker becuase :
    /**
     * http://127.0.0.1:8000/api/
     * using jwt token allows the website to be :
     * Secure? ✓
     * Scalable? ✓
     * Compact? ✓
     * JSON? ✓
     */
       });   
    Route::group(['prefix' => 'classes'], function () {
     Route::get('/viewClasses', [ClassController::class,'viewClasses']);
     Route::post('/addClass', [ClassController::class,'addClass']);
     Route::post('/deleteClass', [ClassController::class,'deleteClass']);
     Route::post('/editClass', [ClassController::class,'editClass']); //get id of class
 
    });
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