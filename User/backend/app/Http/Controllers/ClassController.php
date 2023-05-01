<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EduClass;

class ClassController extends Controller
{
    public function getClasses()
    {
        $classes = EduClass::get();
        $class_titles = $classes->map(function ($classes) {
            return collect($classes->toArray())
                ->only(['title'])
                ->all();
        });
        return response()->json([
            'result'=>true,
            'class_titles' => $class_titles
        ], 200);
    }
}
