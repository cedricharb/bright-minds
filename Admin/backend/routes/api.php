<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InfoController;
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
    Route::group(['prefix' => 'FAQ'], function () {
     Route::get('/viewFAQ', [InfoController::class,'viewFAQ']);
     Route::post('/addFAQ', [InfoController::class,'addFAQ']);
     Route::post('/deleteFAQ', [InfoController::class,'deleteFAQ']);
 
    });   
    Route::group(['prefix' => 'about'], function () {
      Route::get('/viewAbout', [InfoController::class,'viewAbout']);
      Route::post('/editAbout', [InfoController::class,'editAbout']);
      
  
     });
     Route::group(['prefix' => 'chatbot'], function () {
      Route::post('/addChatbotFAQ', [InfoController::class,'addChatbotFAQ']);
      
 
    });
  });
  });