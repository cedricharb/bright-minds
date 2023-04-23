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
            $collections->string('subject');
            $collections->dateTime('dateTime');
            $collections->text('moreInfo')->nullable();
            $collections->boolean('is_accepted');
            $collections->json('studentDetails');
            $collections->json('guardianDetails');
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
