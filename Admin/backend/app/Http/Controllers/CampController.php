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
        ],200);

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
            ],200);
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
        $request->validate([
            //specify format in frontend
            'start_date' => 'required',
            'end_date' => 'required',
        ]);
        $camp->start_date = $request->start_date;
        $camp->end_date = $request->end_date;
        if($camp->save()){
        return response()->json([
            'result' => true,
            'message' => 'upcoming camps',
        ], 200);}
        else{
            return response()->json([
                'result' => false,
                'message' => 'Fail',
            ], 400);  
        }
        
    }
    public function UpCommingCamps()
    {
        //camp after now
        $currentDate = Carbon::now();
        //$formattedDate = $currentDate->format('Y-m-d H:i:s');
        $newDate = Carbon::createFromFormat('Y-m-d H:i:s', $currentDate)
            ->format('Y-m-d');
        $old_camps = Camp::get();
        $subset_start = $old_camps->map(function ($old_camps) {
            return collect($old_camps->toArray())
                ->all();
            //order by

        });
        $dates = [];
        for ($x = 0; $x <= 1; $x++) {
            $arr[] = $subset_start[$x];
            $element = $arr[$x];

            if($element['start_date'] >  $newDate){
                if($element['visibility']){
                    array_push($dates, $element);
                }
            }

        }
        return response()->json([
            'result' => true,
            'message' => 'upcoming camps',
            'data' => $dates,
        ],200);
    }
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
                ],200);
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
        //edit camp visibility :: defeualt -> disabled ?? enabled
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
            ],200);
        } else {
            return response()->json([
                'result' => false,
                'message' => 'Fail',
            ], 400);
        }
    }

    public function viewRegisteredCampers($camp_id = null)
    {
        // view Registered Campers :: list registered campers

        $campers = Camper::where('campid', $camp_id)->get();
        return response()->json([
            'result' => true,
            'message' => 'list of campers registered',
            'data' => $campers
        ],200);
    }
    public function getEmailOFCampers($camper_id =null)
    {
        $camper = Camper::where('campid',$camper_id)->get();
        
        $emails = [];
        for ($x = 0; $x <= 1; $x++) {
            $arr[] = json_decode($camper[$x]);
            $element = $arr[$x]->student_details->parent_email;
            array_push($emails, $element);

        }


        return response()->json([
            'data' => $emails
        ]);
        
    }

}