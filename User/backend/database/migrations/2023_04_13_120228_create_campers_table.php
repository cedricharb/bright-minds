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
        Schema::create('campers', function ($collections) {
            $collections->id();
            $collections->string('name');
            $collections->integer('age');
            $collections->string('class');
            $collections->string('parent_email');
            $collections->string('parent_number_nb');
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
        Schema::dropIfExists('campers');
    }
};
