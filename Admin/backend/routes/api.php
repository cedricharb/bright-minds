<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClassController;

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
    Route::group(['prefix' => 'classes'], function () {
     /* Authentication Routes */
     Route::get('/viewClasses', [ClassController::class,'viewClasses']);
     Route::post('/addClass', [ClassController::class,'addClass']);
     Route::post('/deleteClass', [ClassController::class,'deleteClass']);
     Route::post('/editClass', [ClassController::class,'editClass']); //get id of class
 
    });   
    
 
  });