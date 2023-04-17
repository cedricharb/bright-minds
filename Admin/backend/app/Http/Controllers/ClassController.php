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
        
        if ($class->save()) {
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
         
        
      }
      public function editClass() {
         //edit class from db
        
      }

}
