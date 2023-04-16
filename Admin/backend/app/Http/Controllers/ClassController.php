<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function viewClasses() {
        //get all classes:Educlass
        $classes=EduClass::all();
        if ($classes->save()) {
            return response()->json([
                      'success' => true,
                      'message' => 'Success',
                      'data' => $classes
                  ], 201);
              } else {
                  return response()->json([
                      'success' => false,
                      'message' => 'Fail',
                  ], 400);
          
              }
      }
      public function addClass() {
        //add class to db
        
      }
      public function deleteClass() {
         //delete class from db
        
      }
      public function editClass() {
         //edit class from db
        
      }

}
