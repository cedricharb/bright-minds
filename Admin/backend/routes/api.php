<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//add contoller paths
/**use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Auth; for admin controllers */
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
    Route::group([
     'middleware' => 'api',
     'prefix' => 'auth'
 ], function () {
     /* Authentication Routes */
    
 
     Route::post('/login', [AuthController::class,'login']);
     
 //api worker becuase :
 /**
  * http://127.0.0.1:8000/api/
  * using jwt token allows the website to be :
  * Secure? ✓
  * Scalable? ✓
  * Compact? ✓
  * JSON? ✓
  */
     
 
     /* Middleware for authentication */
     
    });      
 
  });