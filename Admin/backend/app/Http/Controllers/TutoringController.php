<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TutoringController extends Controller
{
    public function viewTutoringSubjects() {
     // list tutoring subjects
     $subject = Subject::get();
        $subset = $subject->map(function ($subject) {
            return collect($subject->toArray())
                ->only(['subject_name'])
                ->all();
        });
        if ($subject->save()) {
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
    public function addTutoringSubject(Request $request) {
     //add tutoring subject
     $request->validate([
        'subject_name'=>'required',
    ]);
    $subject = new Subject;
    $subject->subject_name=$request->subject_name;
    
    $check = Subject::where('subject_name', $request->subject_name)->first();

    if ($check) { //subject is in our database\
        return response()->json([
            'success' => false,
            'message' => 'error ,subject already exist',
        ], 400);
    }elseif ($subject->save()) {
        return response()->json([
                  'success' => true,
                  'message' => 'Success',
                  'data' => $subject
              ], 201);
          } else {
              return response()->json([
                  'success' => false,
                  'message' => 'Fail',
              ], 400);
      
          }  
     }
    public function deleteTutoringSubject(Request $request) {
     //delete tutoring subject
     $subject = Subject::where('subject_name', $request->subject_name)->first();
    
        if (!$subject) { //subject isn't found in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,subject does not exist',
            ], 400);
        } else {
        
        $subject->delete();
        return response()->json([
            'success' => true,
            'message' => 'Success',
        ], 201);
    
    }  
     }
    /*************sessions**************/
    public function viewTutoringSessions() {
     // list tutoring sessions
       
     }
    public function addTutoringSession() {
     //add tutoring Session
       
     }
    public function deleteTutoringSession() {
     //delete tutoring Session
       
     } 
    public function setTutoringSession() {
     //edit tutoring Session
       
     } 
     public function addTutoringSchedual() {
     //add tutoring Session
       
     }
    public function deleteTutoringSchedual() {
     //delete tutoring Session
       
     } 
    public function viewTutoringSchedual() {
     //view tutoring Session
       
     } 
}
