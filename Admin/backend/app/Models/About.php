<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class About extends Model
{
    protected $collection = 'about';
    use HasFactory;
}
