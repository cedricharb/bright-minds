<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;
use App\Models\FAQ;
use App\Models\Chatbot;

class InfoController extends Controller
{

    public function viewFAQ()
    {
        // list
        $faq = FAQ::get();
        $subset = $faq->map(function ($faq) {
            return collect($faq->toArray())
                ->only(['question', 'answer', 'keywords'])
                ->all();
        });

        return response()->json([
            'result' => true,
            'message' => 'FAQ Listed',
            'data' => $subset
        ], 201);

    }

    public function addFAQ(Request $request)
    {
        //add 
        $request->validate([
            'question' => 'required',
            'answer' => 'required',
            // 'keywords'=>'required', 
        ]);
        $faq = new FAQ;
        $faq->question = $request->question;
        $faq->answer = $request->answer;
        $faq->keywords = $request->keywords;
        //adds a list of keywords
        /** front end should return
         * {
         *"question": "q_3",
         *"answer": "a",
         *"keywords": {
         *    "key1": "education",
         *    "key3": "center"
         *}
         *       }
         */
        $faq_check = FAQ::where('question', $request->question)->first();

        if ($faq_check) { //faq is in our database\
            return response()->json([
                'result' => false,
                'message' => 'error ,FAQ already exist',
            ], 201);
        } elseif ($faq->save()) {
            return response()->json([
                'result' => true,
                'message' => 'FAQ added'
            ], 400);
        } else {
            return response()->json([
                'result' => false,
                'message' => 'Fail',
            ], 400);

        }
    }
    public function deleteFAQ(Request $request)
    {
        //delete 
        $faq = FAQ::where('question', $request->question)->first();

        if (!$faq) { //class isn't found in our database\
            return response()->json([
                'result' => false,
                'message' => 'error ,faq does not exist',
            ], 400);
        } else {

            if ($faq->delete()) {
                return response()->json([
                    'result' => true,
                    'message' => 'faq is deleted',
                ], 201);
            } else {
                return response()->json([
                    'result' => false,
                    'message' => 'Fail',
                ], 400);

            }

        }
    }

    /********about****** */
    public function viewAbout()
    {
        // view about content
        $about = About::all()->firstorFail();

        return response()->json([
            'result' => true,
            'general' => $about->general,
            'mission' => $about->mission,
            'vision' => $about->vision,
        ], 201);

    }


    public function editAbout(Request $request)
    {
        //edit general info
        $request->validate([
            'general' => 'required',

        ]);

        $about = About::all()->firstorFail();

        $new_general_information = $request->input('general'); //take input
        $about->general = $new_general_information;
        $about->save();
        return response()->json([
            'result' => true,
            'message' => 'general information has been edited',
        ], 201);
    }

/******chatbot ***** */


}