<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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
Route::group(['prefix' => 'v1'], function () {
    Route::group(['prefix' => 'admin'], function () {
        Route::group(['prefix' => 'camp'], function () {
        Route::get('/viewCamps', [CampController::class,'viewCamps']);
        Route::post('/addCamp', [CampController::class,'addCamp']);
        Route::post('/deleteCamp', [CampController::class,'deleteCamp']);
        Route::post('/setCampTimings', [CampController::class,'setCampTimings']); //get id 
        Route::post('/editCampVisibility', [CampController::class,'editCampVisibility']); //allow reg for camps
        Route::get('/viewRegisteredCampers', [CampController::class,'viewRegisteredCamperss']);//get id 
        Route::get('/sendEmailToCampers', [CampController::class,'sendEmailToCampers']);//get id 
        Route::get('/viewCampReviews', [CampController::class,'viewCampReviews']); //get id
        });   
    
 
    });
});