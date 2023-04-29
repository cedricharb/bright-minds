<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Camp extends Model
{
    use HasFactory;
    protected $collection ="camps";
}
