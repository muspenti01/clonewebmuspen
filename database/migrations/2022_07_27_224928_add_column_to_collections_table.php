<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToCollectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('collections', function (Blueprint $table) {
            $table->string('registration_number')->nullable();
            $table->string('registration_year')->nullable();
            $table->string('inventory_number')->nullable();
            $table->string('contributor')->nullable();
            $table->string('bahan')->nullable();
            $table->string('ukuran')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('collections', function (Blueprint $table) {
            $table->dropColumn('registration_number');
            $table->dropColumn('registration_year');
            $table->dropColumn('inventory_number');
            $table->dropColumn('contributor');
            $table->dropColumn('bahan');
            $table->dropColumn('ukuran');
        });
    }
}
