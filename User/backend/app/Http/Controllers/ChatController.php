<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;
use App\Models\Chatbot;

class ChatController extends Controller
{
    public function openChat() {
        $faqs = FAQ::all();
        return response()->json($faqs);
    }
    
}
