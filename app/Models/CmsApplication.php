<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class CmsApplication extends Model
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
        'thumbnails'         => 'array',
        'images'             => 'array',
        'videos'             => 'array',
        'audio_in_english'   => 'array',
        'audio_in_indonesia' => 'array',
        'documents'          => 'array',
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
    public function categories()
    {
        return $this->belongsToMany(CmsCategory::class, 'cms_application_cms_category', 'cms_application_id', 'cms_category_id');
    }
    public function locations()
    {
        return $this->belongsToMany(CmsLocation::class, 'cms_application_cms_location', 'cms_application_id', 'cms_location_id');
    }
    public function tags()
    {
        return $this->belongsToMany(CmsTag::class, 'cms_application_cms_tag', 'cms_application_id', 'cms_tag_id');
    }
    public function contents()
    {
        return $this->hasMany(CmsApplication::class, 'parent_id', 'id');
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
}
