<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGuestBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guest_books', function (Blueprint $table) {
            $table->id();
            $table->string('visitor_type')->nullable();
            $table->string('age')->nullable();
            $table->string('tourist')->nullable();
            $table->string('name')->nullable();
            $table->string('sex')->nullable();
            $table->string('no_whatsapp')->nullable();
            $table->string('email')->nullable();
            $table->string('group_name')->nullable();
            $table->string('group_member_total')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('guest_books');
    }
}
