<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Str;

class Update extends Model
{
    use CrudTrait;

    /*
    |--------------------------------------------------------------------------
    | GLOBAL VARIABLES
    |--------------------------------------------------------------------------
    */

    protected $table = 'updates';
    // protected $primaryKey = 'id';
    // public $timestamps = false;
    protected $guarded = ['id'];
    // protected $fillable = [];
    // protected $hidden = [];
    // protected $dates = [];

    public static function boot()
    {
        parent::boot();
        static::deleting(function($obj) {
            if (count((array)$obj->file)) {
                foreach ((array)$obj->file as $file_path) {
                    Storage::disk('public')->delete($file_path);
                }
            }
        });
    }

    /*
    |--------------------------------------------------------------------------
    | FUNCTIONS
    |--------------------------------------------------------------------------
    */

    public function setFileAttribute($value)
    {
        $attribute_name = "file";
        $disk = "public";
        $destination_path = "uploads/updates";

        if ($value==null) {
            Storage::disk($disk)->delete($this->{$attribute_name});
            $this->attributes[$attribute_name] = null;
        }
        if (Str::startsWith($value, 'data:image'))
        {
            $image = Image::make($value)->encode('jpg', 90);
            $filename = md5($value.time()).'.jpg';
            Storage::disk($disk)->put($destination_path.'/'.$filename, $image->stream());
            Storage::disk($disk)->delete($this->{$attribute_name});
            $public_destination_path = Str::replaceFirst('public/', '', $destination_path);
            $this->attributes[$attribute_name] = $public_destination_path.'/'.$filename;
        }
    }

    /*
    |--------------------------------------------------------------------------
    | RELATIONS
    |--------------------------------------------------------------------------
    */

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

    public function setEmbedLinkAttribute($value)
    {
        if ($value) {
            // Strip any <script> tags for security and WAF safety
            $clean = preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', '', $value);
            $this->attributes['embed_link'] = trim($clean);
        } else {
            $this->attributes['embed_link'] = $value;
        }
    }
}
