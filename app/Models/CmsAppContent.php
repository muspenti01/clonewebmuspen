<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class CmsAppContent extends Model
{
    use CrudTrait;

    /*
    |--------------------------------------------------------------------------
    | GLOBAL VARIABLES
    |--------------------------------------------------------------------------
    */

    protected $table = 'cms_applications';
    // protected $primaryKey = 'id';
    // public $timestamps = false;
    protected $guarded = ['id'];
    // protected $fillable = [];
    // protected $hidden = [];
    // protected $dates = [];
    protected $casts = [
        'thumbnails' => 'array',
        'images' => 'array',
        'videos' => 'array',
        'audio_in_english' => 'array',
        'audio_in_indonesia' => 'array',
        'documents' => 'array',
    ];

    /*
    |--------------------------------------------------------------------------
    | FUNCTIONS
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */
    public function application()
    {
        return $this->belongsTo(CmsApplication::class, 'parent_id', 'id');
    }

    public function categories()
    {
        return $this->belongsToMany(CmsCategory::class, 'cms_application_cms_category', 'cms_application_id', 'cms_category_id');
    }
    
    public function tags()
    {
        return $this->belongsToMany(CmsTag::class, 'cms_application_cms_tag', 'cms_application_id', 'cms_tag_id');
    }

    public function locations()
    {
        return $this->hasOne(CmsLocation::class, 'id', 'location_id');
    }

    /*
    |--------------------------------------------------------------------------
    | SCOPES
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | ACCESSORS
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | MUTATORS
    |--------------------------------------------------------------------------
    */
    public function setThumbnailsAttribute($value)
    {
        $this->uploadMultipleFilesToDisk($value, 'thumbnails', 'public', 'applications/contents/thumbnails');
    }

    public function setImagesAttribute($value)
    {
        $this->uploadMultipleFilesToDisk($value, 'images', 'public', 'applications/contents/images');
    }

    public function setVideosAttribute($value)
    {
        $this->uploadMultipleFilesToDisk($value, 'videos', 'public', 'applications/contents/videos');
    }

    public function setAudioInEnglishAttribute($value)
    {
        $this->uploadMultipleFilesToDisk($value, 'audio_in_english', 'public', 'applications/contents/audioInEnglish');
    }

    public function setAudioInIndonesiaAttribute($value)
    {
        $this->uploadMultipleFilesToDisk($value, 'audio_in_indonesia', 'public', 'applications/contents/audioInIndonesia');
    }

    public function setDocumentsAttribute($value)
    {
        $this->uploadMultipleFilesToDisk($value, 'documents', 'public', 'applications/contents/documents');
    }
}
