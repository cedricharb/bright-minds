<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Camp;
use App\Models\Camper;
use Illuminate\Support\Carbon;

class CampController extends Controller
{
    //
    public function viewCamps()
    {
        // list camps
        $camp = Camp::get();

        return response()->json([
            'result' => true,
            'message' => 'Camp listed',
            'data' => $camp,
        ], 201);

    }
    public function addCamper(Request $request, $camp_id)
    {
        /***
        * campers {
        campid:
        student details: {
        name:
        age: 
        class: ;
        }
        guardian-details: {
        nb-guardians: 2
        guardian1: {
        name: Jane,
        email: parent@mail.com,
        number: 12/345/678,
        relationship-to-student: mother
        }
        guardian2: {
        name: Joe,
        email: parent@mail.com,
        number: 12/345/678
        relationship-to-student: uncle
        }
        }
        attended:
        }*/
        
        $camp = new Camper;
        $camp->title = $request->stude;
        $camp->description = $request->description;
        $camp->age_range = $request->age_range;
        $camp->start_date = $request->start_date;
        $camp->end_date = $request->end_date;
        $camp->visibility = $request->visibility;
    }
    public function addCamp(Request $request)
    {
        // add camp
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'age_range' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'visibility' => 'required',
        ]);
        $camp = new Camp;
        $camp->title = $request->title;
        $camp->description = $request->description;
        $camp->age_range = $request->age_range;
        $camp->start_date = $request->start_date;
        $camp->end_date = $request->end_date;
        $camp->visibility = $request->visibility;
        $camp_check = Camp::where('title', $request->title)->first();
        if ($camp_check) {
            return response()->json([
                'result' => false,
                'message' => 'error ,camp already exist',
            ], 400);
        } elseif ($camp->save()) {
            return response()->json([
                'result' => true,
                'message' => 'Camp added',
                //'data' => $camp
            ], 201);
        } else {
            return response()->json([
                'result' => false,
                'message' => 'Fail',
            ], 400);
        }
    }
    public function setCampTimings(Request $request, $id = null)
    {
        //camp time edit
        $camp = Camp::find($id);
        $request->validate([ //specify format in frontend
            'start_date' => 'required',
            'end_date' => 'required',
        ]);
        $camp->start_date = $request->start_date;
        $camp->end_date = $request->end_date;
        $camp->save();
    }
    public function UpCommingCamps()
    {
        //camp after now
        $currentDate = Carbon::now();
        //$formattedDate = $currentDate->format('Y-m-d H:i:s');
        $newDate = Carbon::createFromFormat('Y-m-d H:i:s', $currentDate)
            ->format('m/d/Y');
        $old_camps = Camp::get();
        $subset_start = $old_camps->map(function ($old_camps) {
            return collect($old_camps->toArray())
                ->only(['start_date',])
                ->all();
            //order by

        });
        return response()->json([
            'result' => true,
            'message' => 'upcoming camps',
            'data' => $newDate,
        ], 201);
    }
    //compare current date with entires in list
    public function deleteCamp(Request $request, $id = null)
    {
        //delete camp
        $camp = Camp::find($id);
        if (!$camp) {
            return response()->json([
                'result' => false,
                'message' => 'error ,camp does not exist',
            ], 400);
        } else {
            if ($camp->delete()) {
                return response()->json([
                    'result' => true,
                    'message' => 'camp is deleted',
                ], 201);
            } else {
                return response()->json([
                    'result' => false,
                    'message' => 'Fail',
                ], 400);
            }
        }
    }
    public function editCampVisisbility(Request $request, $id = null)
    {
        // edit camp visibility :: defeualt -> disabled ?? enabled
        //true=visibile
        //false=not visibil
        $camp = Camp::find($id);
        $original_visibiity = $camp->visibility;
        if ($original_visibiity) {
            $new_visibility = false;
        } else {
            $new_visibility = true;
        }
        $camp->visibility = $new_visibility;
        //updates the db
        if ($camp->save()) {
            return response()->json([
                'result' => true,
                'message' => 'changed visibility',
                'data' => $camp
            ], 201);
        } else {
            return response()->json([
                'result' => false,
                'message' => 'Fail',
            ], 400);
        }
    }

    public function viewRegisteredCampers()
    {
        // view Registered Campers :: list registered campers
        /**student details>
        * guardian number
        >gaurdian details
        >relationship typye
        */
        /***
        * campers {
        campid:
        student details: {
        name:
        age: 
        class: ;
        }
        guardian-details: {
        nb-guardians: 2
        guardian1: {
        name: Jane,
        email: parent@mail.com,
        number: 12/345/678,
        relationship-to-student: mother
        }
        guardian2: {
        name: Joe,
        email: parent@mail.com,
        number: 12/345/678
        relationship-to-student: uncle
        }
        }
        attended:
        }
        */
        $campers = Camper::get();
        return response()->json([
            'result' => true,
            'message' => 'list of campers registered',
            'data' => $campers
        ], 201);
    }
    public function getEmailOFCampers()
    {
        // send Email To campers :: get email of campers registered in specific camps
        $camper = Camper::get();
        $subset = $camper->map(function ($camper) {
            return collect($camper->toArray())
                ->only(['student_email'])
                ->all();
        });
        return response()->json([
            'result' => true,
            'message' => 'email of campers registered',
            'data' => $subset
        ], 201);
    }

}