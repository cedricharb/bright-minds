<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Camp;
use Illuminate\Support\Carbon;

class CampController extends Controller
{
    public function getCamps()
    {
        $upcoming_camp = Camp::latest()->firstOrFail();
        $prev = Camp::latest()->skip(1);
        $prev_camps = $prev->map(function ($prev) {
            return collect($prev->toArray())
                ->only(['title'])
                ->all();
        });

        return response()->json([
            "result" => true,
            "message" => 'upcoming camp and previous camp titles',
            "upcoming" => $upcoming_camp,
            "prev" => $prev_camps
        ], 200);
    }

    public function register(Request $request, $id)
    {
        $camp = Camp::find($id);
        if (!$camp) {
            return response()->json([
                "result" => false,
                "message" => 'camp not found'
            ]);
        }
        $camper = new Camper;
        $camper->$name = $request->$name;
        $camper->$age = $request->$age;
        $camper->$class = $request->$class;
        $camper->$parent_email = $request->$parent_email;
        $camper->$parent_phone_nb = $request->$parent_phone_nb;
        if ($camper->save) {
            return response()->json([
                "result" => true
            ], 200);
        } else {
            return response()->json([
                "result" => false,
                "message" => 'Camper not saved.'
            ]);
        }
    }

    public function getPrevCamp($id)
    {
        $camp = Camp::find($id);
        if ($camp) {
            $upcoming_camp = Camp::latest()->firstOrFail();
            if ($camp == $upcoming_camp) {
                return response()->json([
                    "result" => true,
                    "message" => 'this camp is not a previous camp',
                    "camp" => $camp
                ]);
            } else {
                return response()->json([
                    "result" => true,
                    "camp" => $camp
                ]);
            }
        } else {
            return response()->json([
                "result" => false,
                "message" => 'camp not found'
            ]);
        }
    }
}
