<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImageToGuestBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('guest_books', function (Blueprint $table) {
            $table->string('image_url')->nullable();
            $table->string('subs')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('guest_books', function (Blueprint $table) {
            $table->dropColumn('image_url');
            $table->dropColumn('subs');
        });
    }
}
