<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;
use App\Models\Chatbot;

class ChatController extends Controller
{
    public function openChat() {
        $faqs = FAQ::all();
        $faq_details = $faqs->map(function($faqs) {
            return collect($faqs->toArray())
                ->only(['id', 'answer', 'keywords'])
                ->all();
        });
        return response()->json([
            'result'=>true,
            'message' => "faqs",
            'data' => $faq_details
        ], 200);
    }
    
    public function receiveFeedback(Request $request) {
        $faq = FAQ::find($request->id);
        $new_chat = new Chatbot;
        $new_chat->answer = $faq->answer;
        $new_chat->question = $request->question;
        $new_chat->review = $request->review;
        if ($new_chat->save()) {
            return response()->json([
                'result'=>true
            ], 200);
        } else {
            return response()->json([
                'result' => false, 
                'message' => 'chat feedback not saved.'
            ]);
        }
    }
}
