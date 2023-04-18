<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;

class InfoController extends Controller
{
    public function getInfo() {
        $about = About::find('643eeae3ed89046e426aa1bf'); //to-do: _id is an object idk if this will work
        return response()->json([
            "result" => true,
            "general" => $about->general,
            "mission" => $about->mission,
            "vision" => $about->vision
        ]);

    }
}
