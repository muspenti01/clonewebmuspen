<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCmsApplicationCmsCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms_application_cms_category', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cms_application_id')->constrained('cms_applications')->cascadeOnDelete();
            $table->foreignId('cms_category_id')->constrained('cms_categories')->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cms_application_cms_category');
    }
}
