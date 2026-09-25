<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCmsApplicationCmsLocationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms_application_cms_location', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cms_application_id')->constrained('cms_applications')->cascadeOnDelete();
            $table->foreignId('cms_location_id')->constrained('cms_locations')->cascadeOnDelete();
            $table->softDeletes();
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
        Schema::dropIfExists('cms_application_cms_location');
    }
}
