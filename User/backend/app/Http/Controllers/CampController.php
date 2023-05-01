<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FAQ;

class CampController extends Controller
{
    public function openChat() {
        $faqs = FAQ::all();
        return response()->json($faqs);
    }
}
