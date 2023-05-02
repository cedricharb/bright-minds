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
            $collections->subject();
            $collections->date_time();
            $collections->json('student_details');
            $collections->json('guardian_details');
            $collections->more_info();
            $collections->is_accepted();
            $collections->timestamps();
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
