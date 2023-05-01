<?php

namespace App\Http\Controllers;

use App\Models\About;

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
}
