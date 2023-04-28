<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EduClass;

class ClassController extends Controller
{
    public function viewClasses() {
    //get all classes:Educlass
        $classes = EduClass::get();
        $subset = $classes->map(function ($classes) {
            return collect($classes->toArray())
                ->only(['title', 'description', 'age_range'])
                ->all();
        });
        if ($classes->save()) {
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
      public function addClass(Request $request) {
        //add class to db
        $request->validate([
            'tile'=>'required',
            'description'=>'required',
            'age_range'=>'required', 
        ]);
        $class = new EduClass;
        $class->title=$request->title;
        $class->description=$request->description;
        $class->age_range=$request->age_range;
        
        $class_check = EduClass::where('title', $request->title)->first();
    
        if ($class_check) { //class is in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,class already exist',
            ], 400);
        }elseif ($class->save()) {
            return response()->json([
                      'success' => true,
                      'message' => 'Success',
                      'data' => $class
                  ], 201);
              } else {
                  return response()->json([
                      'success' => false,
                      'message' => 'Fail',
                  ], 400);
          
              }
            
      }
      public function deleteClass(Request $request) { 
         //delete class from db
         $class = EduClass::where('title', $request->title)->first();
    
        if (!$class) { //class isn't found in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,class does not exist',
            ], 400);
        } else {
        
        $class->delete();
        return response()->json([
            'success' => true,
            'message' => 'Success',
        ], 201);
    
    }
        
      }
      public function editClass(Request $request) { //test
         //edit class from db
         /**
          * req info to edit
          * update db
          */
          $request->validate([
            'tile'=>'required',
            'description'=>'required',
            'age_range'=>'required', 
        ]);
        
        $class = EduClass::where('title', $request->title)->first();
        $class_id = $class->id;
        if (!$class) { //class isn't found in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,class does not exist',
            ], 400);
        } else {
        $class=EduClass::find($class_id); 

        $new_title= $request->input('title'); //take input
        $new_d= $request->input('discreption'); //take input
        $new_a= $request->input('age_range'); //take input
        $class->title=$new_title;
        $class->description=$new_d;
        $class->age_range=$new_a;
        $class->save();
        return response()->json([
            'success' => true,
            'message' => 'Success',
        ], 201);
    
    }
      }

    
}
