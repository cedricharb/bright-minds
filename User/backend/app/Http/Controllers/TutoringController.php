<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;
use App\Models\Schedule;
use App\Models\Session;

class TutoringController extends Controller
{
    public function getSubjects()
    {
        $subjects = Subject::get();
        if ($subjects && $subjects!=[]) {
            return response()->json([
                "result" => true,
                "subjects"=> $subjects
            ]);
        } else {
            return response()->json([
                "result" => false
            ]);
        }
    }

    public function getSchedule()
    {
        $schedule = Schedule::all();
        if ($schedule && $schedule!=[]) {
            return response()->json([
                "result" => true,
                "schedule"=> $schedule
            ]);
        } else {
            return response()->json([
                "result" => false
            ]);
        }

    }

    public function postSession(Request $request)
    {
        $session = new Session;
        $session->subject = $request->subject;
        $session->date_time = $request->date_time;
        $session->student_details = $request->student_details;
        $session->guardian_details = $request->guardian_details;

        if ($session->save()) {
            return response()->json([
                "result"=>true
            ]);
        } else {
            return response()->json([
                "result"=>false
            ]);
        }

    }
}
