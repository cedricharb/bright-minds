<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Camp;
use App\Models\Camper;
use Illuminate\Support\Carbon;

class CampController extends Controller
{
    public function getCamps()
    {
        $current_date = Carbon::now();
        $date = Carbon::createFromFormat('Y-m-d H:i:s', $current_date)->format('Y-m-d');
        $camps = Camp::get();
        $counter = $camps->count();
        $prev_camps = []; $upcoming_camp = [];
        for ($x = 0; $x <= $counter-1; $x++) {
            if ($camps[$x]->start_date > $date) {
                array_push($prev_camps, $camps[$x]);
            }
            if ($camps[$x]->start_date < $date) {
                $upcoming_camp = $camps[$x];
            }
        }
        return response()->json([
            'result' => true,
            'upcoming camp' => $upcoming_camp,
            'prev camp titles' => $prev_camps
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
        $camper->name = $request->name;
        $camper->age = $request->age;
        $camper->class = $request->class;
        $camper->parent_email = $request->parent_email;
        $camper->parent_phone_nb = $request->parent_phone_nb;
        if ($camper->save()) {
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
