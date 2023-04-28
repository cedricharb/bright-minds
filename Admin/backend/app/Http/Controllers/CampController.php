<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Camp;
use App\Models\Camper;

class CampController extends Controller
{
    //
    public function viewCamps() {
        // list camps
        $camp = Camp::get();
        $subset = $camp->map(function ($camp) {
            return collect($camp->toArray())
                ->only(['title', 'start_date', 'end_date','description','age_range','visibility'])
                ->all();
        });
        if ($camp->save()) {
            return response()->json([
                      'success' => true,
                      'message' => 'Success',
                      'data' => $subset
                  ], 201);
              } else {
                  return response()->json([
                      'success' => false,
                      'message' => 'Fail',
                  ], 400);
          
              }
        }
       public function addCamp(Request $request) {
        // add camp
        $request->validate([
            'tile'=>'required',
            'description'=>'required',
            'age_range'=>'required', 
            'start_date'=>'required',  
            'end_date'=>'required', 
            'visibility'=>'required',
        ]);
        $camp = newCamp;
        $camp->title=$request->title;
        $camp->description=$request->description;
        $camp->age_range=$request->age_range;
        $camp->start_date=$request->start_date;
        $camp->end_date=$request->end_date;
        $camp->visibility=$request->visibility;
        
        $camp_check = Camp::where('title', $request->title)->first();
    
        if ($camp_check) { 
            return response()->json([
                'success' => false,
                'message' => 'error ,camp already exist',
            ], 400);
        }elseif ($camp->save()) {
            return response()->json([
                      'success' => true,
                      'message' => 'Success',
                      'data' => $camp
                  ], 201);
              } else {
                  return response()->json([
                      'success' => false,
                      'message' => 'Fail',
                  ], 400);
          
              } 
        }
       public function setCampTimings() {
        //camp time edit

          
        }
       public function deleteCamp() {
        //delete camp
        $camp = Camp::where('title', $request->title)->first();
    
        if (!$camp) { 
            return response()->json([
                'success' => false,
                'message' => 'error ,class does not exist',
            ], 400);
        } else {
        
        $camp->delete();
        return response()->json([
            'success' => true,
            'message' => 'Success',
        ], 201);
       }
    }
       public function editCampVisisbility(Request $request,$id=null) {
       // edit camp visibility :: defeualt -> disabled ?? enabled
       //true=visibile
       //false=not visibil

       $camp=Camp::where('id',$id)->get();
       $original_visibiity =$camp->visibility;
       if ($original_visibiity) {
        $new_visibility = false;
       } else {
        $new_visibility = true;
       }
       $camp->visibility=$new_visibility;
       //updates the db
       if ($camp->save()) {
        return response()->json([
                  'success' => true,
                  'message' => 'Success',
                  'data' => $camp
              ], 201);
          } else {
              return response()->json([
                  'success' => false,
                  'message' => 'Fail',
              ], 400);
      
          } 

   
       }
       public function viewRegisteredCampers() {
       // view Registered Campers :: list registered campers
       /**student details>
        * guardian number
        >gaurdian details
        >relationship typye
        */
        $camper = Camper::get();
        $subset = $camper->map(function ($camper) {
            return collect($camper->toArray())
                //->only(['student_name', 'start_date', 'end_date','description','age_range','visibility'])
                ->all();
        });
        if ($camper->save()) {
            return response()->json([
                      'success' => true,
                      'message' => 'Success',
                      'data' => $subset
                  ], 201);
              } else {
                  return response()->json([
                      'success' => false,
                      'message' => 'Fail',
                  ], 400);
          
              }    
       }
       public function sendEmailToCampers() {
       // send Email To campers :: get email of campers registered in specific camps
       $camper = Camper::get();
       $subset = $camper->map(function ($camper) {
           return collect($camper->toArray())
               ->only(['student_email'])
               ->all();
       });
       if ($camper->save()) {
           return response()->json([
                     'success' => true,
                     'message' => 'Success',
                     'data' => $subset
                 ], 201);
             } else {
                 return response()->json([
                     'success' => false,
                     'message' => 'Fail',
                 ], 400);
         
             }        
       }
       public function viewCampReviews(Request $request) {
       // list Camp Reviews
       $camp = Camp::get();
       $subset = $camp->map(function ($camper) {
           return collect($camp->toArray())
               ->only(['reviewer_name', 'content'])
               ->all();
       });
       if ($camp->save()) {
           return response()->json([
                     'success' => true,
                     'message' => 'Success',
                     'data' => $subset
                 ], 201);
             } else {
                 return response()->json([
                     'success' => false,
                     'message' => 'Fail',
                 ], 400);
         
             }        
       }
                     
       }
