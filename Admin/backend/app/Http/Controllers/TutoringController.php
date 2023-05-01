<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use App\Models\Subject;
use App\Models\Session;

class TutoringController extends Controller
{
    public function viewTutoringSubjects()
    {
        // list tutoring subjects
        $subject = Subject::get();
        $subset = $subject->map(function ($subject) {
            return collect($subject->toArray())
                ->only(['subject_name'])
                ->all();
        });
        
            return response()->json([
                'success' => true,
                'message' => 'Success',
                'data' => $subset
            ], 201);
        

    }
    public function addTutoringSubject(Request $request)
    {
        //add tutoring subject
        $request->validate([
            'subject_name' => 'required',
        ]);
        $subject = new Subject;
        $subject->subject_name = $request->subject_name;

        $check = Subject::where('subject_name', $request->subject_name)->first();

        if ($check) { //subject is in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,subject already exist',
            ], 400);
        } elseif ($subject->save()) {
            return response()->json([
                'success' => true,
                'message' => 'Success'
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Fail',
            ], 400);

        }
    }
    public function deleteTutoringSubject(Request $request)
    {
        //delete tutoring subject
        $subject = Subject::where('subject_name', $request->subject_name)->first();

        if (!$subject) { //subject isn't found in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,subject does not exist',
            ], 400);
        } else {

            $subject->delete();
            return response()->json([
                'success' => true,
                'message' => 'Success',
            ], 201);

        }
        /*************schedual**************/
    }
    /* public  function add_tutoring_time($time,$request){
    //take input, create entity ,add to array
    $from= $request->input('from'); //take input
    $to= $request->input('to'); //take input
    $timings = array($from, $to);
    return $timings;
    }*/

    public function addTutoringSchedule(Request $request)
    {
        //add 
        /**example
         * Moday: { //day 
         *	available: true;
         *	timings: { //time :array
         *		08:30-9:30:false; 
         *		...
         *		15:30-16:30:true;
         *		17:30-18:30:true;
         *		18:30-19:30:true;
         *		...
         *		20:30-21:30:false;
         *	}
         *}
         */

        $request->validate([
            'day' => 'required',
            'available' => 'required',
            //get timings? or ask for timings to be added

        ]);
        $schedule = new Schedule;
        $schedule->day = $request->day;
        $schedule->available = $request->available;

        $check = Schedule::where('day', $request->day)->first();

        if ($check) { //day is in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,subject already exist',
            ], 400);
        } elseif ($schedule->save()) {
            return response()->json([
                'success' => true,
                'message' => 'Success',
                'data' => $schedule
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Fail',
            ], 400);

        }
    }
    public function deleteTutoringSchedule(Request $request)
    {
        //delete 
        $schedule = Schedule::where('day', $request->day)->first();

        if (!$schedule) { //schedule isn't found in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,schedule does not exist',
            ], 400);
        } else {

            $schedule->delete();
            return response()->json([
                'success' => true,
                'message' => 'Success',
            ], 201);

        }
    }
    public function viewTutoringSchedule()
    {
        //view 
        $schedule = Schedule::get();
        $subset = $schedule->map(function ($schedule) {
            return collect($schedule->toArray())
                ->only(['day', 'available'])
                ->all();
        });
        if ($schedule->save()) {
            return response()->json([
                'success' => true,
                'message' => 'Success',
                'data' => $subset
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Fail',
            ], 400);

        }



    }

    /*************sessions**************/
    public function get_subject_name($id)
    {
        $subject = Subject::find($id);
        $name = $subject->subject_name;
        return $name;
    }
    public function get_subject_id($name)
    {
        $subject = Subject::where('subject_name', $name);
        $subject_number = $subject->id;
        return $subject_number;
    }
    public function viewTutoringSessions()
    {
        // list 
        /**
         * subject nb(fk)
         * dtae_time
         * more_infromation
         * isAccepted
         * student name
         *         age
         *         class
         *         ->gaurdians
         *            nb gardian
         *             name
         *             email
         *              number
         *             ->grd names(list)
         */

        $session = Session::get();
        $subset = $session->map(function ($session) {
            return collect($session->toArray())
                ->only(['id', 'subject_name', 'date_time', 'more_information', 'isAccepted'])
                ->all();
        }); //add student and gaurdian arrays
        if ($session->save()) {
            return response()->json([
                'success' => true,
                'message' => 'Success',
                'data' => $subset
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Fail',
            ], 400);

        }
    }
    public function addTutoringSession(Request $request)
    {
        //add tutoring Session
        $request->validate([
            'subject_name' => 'required',
            'date_time' => 'required',
            'more_information' => 'required',
            'isAccepted' => 'required'
            //add student and gaurdian arrays


        ]);
        $session = new Session;
        $session->subject_name = get_subject_id($request->subject_name);
        $session->date_time = $request->date_time;
        $session->more_information->more_information;
        $session->more_information = $request->more_information;
        //student and gaurdians input depends on frontend

        if ($session->save()) {
            return response()->json([
                'success' => true,
                'message' => 'Success',
                'data' => $session
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Fail',
            ], 400);

        }
    }
    public function deleteTutoringSession(Request $request, $id = null)
    {
        //delete tutoring Session , takes id from frontend
        $session = Session::where('subject_nb', $request->subject_nb)->first();

        if (!$session) { //session isn't found in our database\
            return response()->json([
                'success' => false,
                'message' => 'error ,session does not exist',
            ], 400);
        } else {

            $session->delete();
            return response()->json([
                'success' => true,
                'message' => 'Success',
            ], 201);

        }
    }
    public function setTutoringSession()
    {
        //edit tutoring Session


    }
}