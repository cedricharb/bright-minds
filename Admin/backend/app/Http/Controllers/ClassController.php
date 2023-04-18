<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClassController extends Controller
{
    //
    public function viewFAQ() {
     // list
     $faq = FAQ::get();
     $subset = $faq->map(function ($faq) {
         return collect($faq->toArray())
             ->only(['question', 'answer', 'keywords'])
             ->all();
     });
     if ($faq->save()) {
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
     
    public function addFAQ(Request $request) {
     //add 
     $request->validate([
        'question'=>'required',
        'answer'=>'required',
        'keywords'=>'required', 
    ]);
    $faq = new FAQ;
    $faq->question=$request->question;
    $faq->answer=$request->answer;
    $faq->keywords=$request->keywords;
    
    $faq_check = FAQ::where('question', $request->question)->first();

    if ($faq_check) { //faq is in our database\
        return response()->json([
            'success' => false,
            'message' => 'error ,FAQ already exist',
        ], 400);
    }elseif ($faq->save()) {
        return response()->json([
                  'success' => true,
                  'message' => 'Success',
                  'data' => $faq
              ], 201);
          } else {
              return response()->json([
                  'success' => false,
                  'message' => 'Fail',
              ], 400);
      
          }   
     }
    public function deleteFAQ(Request $request) {
     //delete 
     $faq = FAQ::where('question', $request->question)->first();
    
        if (!$faq) { //class isn't found in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,faq does not exist',
            ], 400);
        } else {
        
        $faq->delete();
        return response()->json([
            'success' => true,
            'message' => 'Success',
        ], 201);
    
    }
    }

    /********about****** */
    public function viewAbout() {
     // view about content
     $about = About::get();
     $subset = $about->map(function ($about) {
         return collect($about->toArray())
             ->only(['general_information', 'mission', 'vision'])
             ->all();
     });
     if ($about->save()) {
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
     
    public function editAbout(Request $request) {
     //edit general info
     $request->validate([
        'general_information'=>'required',
        
    ]);
    
    $about = About::where('general_information', $request->title)->first();
    $about_id = $about->id;
    
    $about=About::find($about_id); 

    $new_general_information= $request->input('general_information'); //take input
    $about->title=$new_general_information;
    $about->save();
    return response()->json([
        'success' => true,
        'message' => 'Success',
    ], 201);
     }

     /******chatbot ***** */
     public function addChatbotFAQ() {
     //record chatbot answer/question to be added to faq section
       
     }
}
