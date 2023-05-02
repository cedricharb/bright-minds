<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    protected $collection = '_schedules_';
}
