<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;

class InfoController extends Controller
{
    public function getInfo()
    {
        $about = About::find('643ef5c7ed89046e426aa1c2');
        return response()->json([
            "result" => true,
            "general" => $about->general,
            "mission" => $about->mission,
            "vision" => $about->vision
        ]);

    }

    public function updateInfo(Request $request)
    {
        $about = About::find('643ef5c7ed89046e426aa1c2');
        $result;
        switch ($request) {
            case 1:
                $about->general = $request->editedText;
                $about->save;
                $result = true;
                break;
            case 2:
                $about->mission = $request->editedText;
                $about->save;
                $result = true;
                break;
            case 3:
                $about->vision = $request->editedText;
                $about->save;
                $result = true;
                break;
            default:
                $result = false;
                break;
        }
        return response()->json([
            "result" => $result
        ]);
    }