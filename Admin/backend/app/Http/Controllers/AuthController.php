<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Auth;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Tymon\JWTAuth\Exceptions\JWTException;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\Facades\JWTAuth;


class AuthController extends Controller
{

    /* public function __construct()
    {
    $this->middleware('auth:api', ['except' => ['login']]);
    }*/

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */


    /* public function __construct()
    {
    $this->middleware('auth:api', ['except' => ['login']]);
    }*/

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    //login
    
    public function login(Request $request)
    {
        try {
            if (RateLimiter::tooManyAttempts(request()->ip(), 3)) {
                return response()->json(
                    ['message' => 'Too many fail login attempt your ip has restricted for 1 minute.'],
                    Response::HTTP_UNAUTHORIZED
                );
            }
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required|string',


            ]);

            if ($validator->fails()) { //test each input to specify
                RateLimiter::hit(request()->ip(), 60);
                return response()->json(["message" => "An error occured"], 202);
            }
            if (!$token = auth('api')->attempt($validator->validated())) { //if not registered
                RateLimiter::hit(request()->ip(), 60); //if invalid cred
                return response()->json(["message" => "unAuthorized"], 200);
            }

            RateLimiter::clear(request()->ip());
            return $this->respondWithToken($token);

        } catch (\Throwable $th) {
            throw $th;
        }
    }


    


    public function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'user' => Auth::user(),
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
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
    public function logout(Request $request)
    {
        Auth::logout(); //if token has expired handle error respponse in frontend
        return response()->json([
            'result' => true,
            'message' => 'Successfully logged out',
        ]);
    }

    public function changePassword(Request $request){
        $user = User::where('email', $request->email)->first();
    
        if (!$user) { //Email isn't found in our database\
            return response()->json([
                'result' => false,
                'message' => 'error',
            ], 400);
        } else {
        /**
         * req new password
         * update db
         * verification email
         */
        $request->validate([
            'new_password' => 'required|string',
            'old_password' => 'required|string',
        ]);
        
        $new_password= $request->input('new_password'); //take input
        if(Hash::check($request->old_password, $user->password)){

        
        $user->password = Hash::make($new_password); 
        $user->save();
        return response()->json([
            'result' => true,
            'message' => 'Success: password is changed.',
        ], 201);
    }else{
        return response()->json([
            'result' => false,
            'message' => "Fail :incorrect old pass",
            
        ], 201);
    }
    
    }}
    public function refresh()
    {
        return response()->json([
            'result' => true,
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
    /***********testting registration for login not***** */
    /*********** adding the amdin information porperly rather than manualy :IT Job***** */
    function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password =Hash::make($request->password);

        if ($user->save()) {
            return response()->json([
                'result' => true,
                'message' => 'admin added',
                'data' => $user
            ], 201);
        } else {
            return response()->json([
                'result' => false,
                'message' => 'Fail',
            ], 400);
        }
    }
    public function check_test(Request $request){
        return response()->json([
            'result' => true,
            'message' => 'admin added',
            'data' =>auth()->user()
        ], 201);
    }
}