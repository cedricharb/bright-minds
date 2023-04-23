<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;

class InfoController extends Controller
{
    public function getInfo()
    {
        $about = About::all()->firstOrFail();
        return response()->json([
            "result" => true,
            "general" => $about->general,
            "mission" => $about->mission,
            "vision" => $about->vision
        ]);
    }
}