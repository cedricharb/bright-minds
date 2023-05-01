<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\FAQ;

class InfoController extends Controller
{
    public function getInfo()
    {
        $about = About::latest()->firstOrFail();
        return response()->json([
            "result" => true,
            "general" => $about->general,
            "mission" => $about->mission,
            "vision" => $about->vision
        ]);
    }

    public function getFAQs()
    {
        $faqs = FAQ::all();
        return response()->json([
            "result" => true,
            "FAQs" => $faqs]);
    }
}
