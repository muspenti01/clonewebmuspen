<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnBooking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bookings', function (Blueprint $table){
            $table->string('event_id')->nullable()->change();
            $table->integer('visitor')->default(1);
            $table->string('type')->default(\App\Models\Booking::TYPE_EVENT);
            $table->string('phone');
            $table->dateTime('date')->nullable();
            $table->string('category')->default(\App\Models\Booking::CATEGORY_OFFLINE);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bookings', function (Blueprint $table){
            $table->string('event_id')->change();
            $table->dropColumn('phone');
            $table->dropColumn('visitor');
            $table->dropColumn('category');
            $table->dropColumn('date');
            $table->dropColumn('type');

        });
    }
}
