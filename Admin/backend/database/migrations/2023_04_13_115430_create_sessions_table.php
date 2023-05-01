<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function ($collections) {
            $collections->id();
            $collections->subject_nb();
            $collections->date_time();
            $collections->more_info();
            $collections->is_accepted();
            $collections->timestamps();
            //student
            //guardian of student+details

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
};
