<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Auth;

class adminController extends Controller
{
    //
    function login_admin(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
            
    
        ]);
        if ($validator->fails()) { //if missing input 
            return response()->json($validator->errors(), 202); 
}
        if (!$token = auth()->attempt($validator->validated())) { 
            return response()->json(['error' => 'Unauthorized'], 200);
        }
        return $this->respondWithToken($token);
    }
     protected function respondWithToken($token) {
        return response()->json([
            'access_token' => $token, //user details
            'user' => Auth::user(),
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
    /**
     * user details
     * "id": 1,
      *  "name": "admin",
        *"email": "admin@gmail.com",
     *   "email_verified_at": null,
     *   "created_at": "2022-12-13T22:36:44.000000Z",
      *  "updated_at": "2022-12-13T22:36:44.000000Z"
     */
    /*
      return response()->json([
                'success' => true,
                'message' => 'Success',
                'data' => $user
            ], 201);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Fail',
            ], 400);
        }
    */
}
