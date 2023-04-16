<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Auth;

class AuthController extends Controller
{
    //login
    private function login(Request $request) {
        try {
            if (RateLimiter::tooManyAttempts(request()->ip(), 3)) {
                return response()->json(
                    [ 'message' => 'Too many fail login attempt your ip has restricted for 1 minute.' ], 
                    Response::HTTP_UNAUTHORIZED
                );
                }
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
            
    
        ]);
        if ($validator->fails()) { //test each input to specify
            RateLimiter::hit(request()->ip(), 60);//if invalid cred
            return response()->json($validator->errors(), 202); 
        }
        if (!$token = auth()->attempt($validator->validated())) { 
            return response()->json(['error' => 'Unauthorized'], 200);
        }
        RateLimiter::clear(request()->ip());
        return $this->respondWithToken($token);
        
    }catch (\Throwable $th) {
        throw $th;
    }
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
    public function logout(Request $request) {
        Auth::logout();
        return redirect('/login');
      }
    private function changePassword(Request $request){
        $user = User::where('email', $request->email)->first();
        
        if (!$user) { //Email doesn\'t found on our database\
            return response()->json([
                'success' => false,
                'message' => 'error',
            ], 400);
        } else {
        /**
         * req new password
         * update db
         * verification email
         */
        $validator = Validator::make($request->all()([
            'password' => 'required|string',
        ]));
        if (!$token = auth()->attempt($validator->validated())) { 
            return response()->json(['error' => 'Unauthorized'], 200);
        }
        $new_password= $request->input('new_password');
        $user->password = bcrypt($new_password); 
        $user->save();
        return response()->json([
            'success' => true,
            'message' => 'Success: password is changed.',
        ], 201);

    }}
    
}