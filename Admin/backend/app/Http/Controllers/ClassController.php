<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EduClass;

class ClassController extends Controller
{
    public function viewClasses() {
    //get all classes:Educlass
        $classes = EduClass::get();
       
            return response()->json([
                      'result' => true,
                      'message' => 'success',
                      'data' => $classes,
                  ], 201);
      }
      public function addClass(Request $request) {
        //add class to db
      
        $request->validate([
            'title'=>'required',
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
                'result' => false,
                'message' => 'error ,class already exist',
            ], 400);
        }elseif ($class->save()) {
            return response()->json([
                      'result' => true,
                      'message' => 'Class added',
                  ], 201);
              } else {
                  return response()->json([
                      'result' => false,
                      'message' => 'Fail',
                  ], 400);
          
              }
            
      }
      public function deleteClass(Request $request,$id=null) { 
         //delete class from db
         $class = EduClass::find($id);
    
        if (!$class) { //class isn't found in our database\
            return response()->json([
                'result' => false,
                'message' => 'error ,class does not exist',
            ], 400);
        } else {
        
        $class->delete();
        return response()->json([
            'result' => true,
            'message' => 'class is deleted',
        ], 201);
    
    }
        
      }
      public function editClass(Request $request,$id=null) { //test
         //edit class from db
         /**
          * req info to edit
          * update db
          */
          $request->validate([
            'title'=>'required',
            'description'=>'required',
            'age_range'=>'required', 
        ]);
        
        $class = EduClass::find($id) ;
        if ($class ==null) { //class isn't found in our database\
            return response()->json([
                'result' => false,
                'message' => 'error ,class does not exist',
            ], 400);
        } else {

        $new_title= $request->input('title'); //take input
        $new_d= $request->input('description'); //take input
        $new_a= $request->input('age_range'); //take input
        $class->title=$new_title;
        $class->description=$new_d;
        $class->age_range=$new_a;
        
        if ($class->save()) {
        return response()->json([
            'result' => true,
            'message' => 'Class edited',
        ], 201);
       } else {
        return response()->json([
            'result' => false,
            'message' => 'Fail',
        ], 201);
       }
    
    }
      }

    
}
