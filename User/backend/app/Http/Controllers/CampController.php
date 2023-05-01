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
}
