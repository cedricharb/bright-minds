<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;
use App\Models\Chatbot;

class ChatbotController extends Controller
{
    public function openChat()
    {
        $faqs = FAQ::all();
        return response()->json($faqs);
    }

    public function receiveFeedback(Request $request)
    {
        $faq = FAQ::find($request->id);
        $new_chat = new Chatbot;
        $new_chat->id = $faq->id;
        $new_chat->question = $request->question;
        $new_chat->review = $request->review;
        if ($new_chat->save()) {
            return response()->json([result=>true], 200);
        } else {
            return response()->json([result=>false], 400);
        }
    }
}
