<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rules\Unique;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('users', function ($collections) {
            $collections->id();
            $collections->string('name');
            $collections->string('email');
            $collections->timestamp('email_verified_at')->nullable();
            $collections->string('password');
            $collections->rememberToken();
            $collections->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
