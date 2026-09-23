<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCmsApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parent_id')->nullable()->constrained('cms_applications')->cascadeOnDelete();
            $table->string('name')->nullable();
            // $table->foreignId('category_id')->nullable()->constrained('cms_categories')->nullOnDelete();
            // $table->foreignId('location_id')->nullable()->constrained('cms_locations')->nullOnDelete();
            // $table->foreignId('tag_id')->nullable()->constrained('cms_tags')->nullOnDelete();

            // For Content
            $table->string('title')->nullable();
            $table->text('narration_in_indonesia')->nullable();
            $table->text('narration_in_english')->nullable();
            $table->text('detail_in_indonesia')->nullable();
            $table->text('detail_in_english')->nullable();
            $table->text('thumbnails')->nullable();
            $table->text('images')->nullable();
            $table->text('videos')->nullable();
            $table->text('audio_in_english')->nullable();
            $table->text('audio_in_indonesia')->nullable();
            $table->text('documents')->nullable();

            // thumbnail
            // images
            // videos
            // audio naration in indonesia
            // audio naration in english
            // document
            
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
        Schema::dropIfExists('cms_applications');
    }
}
