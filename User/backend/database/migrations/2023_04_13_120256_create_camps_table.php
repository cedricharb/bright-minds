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
        Schema::create('camps', function ($collections) {
            $collections->id();
            $collections->string('title');
            $collections->dateTime('start_date');
            $collections->dateTime('end_date');
            $collections->text('description');
            $collections->string('age_range');
            $collections->json('reviews');
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
        Schema::dropIfExists('camps');
    }
};
