<?php

namespace App\Models;

use Backpack\Settings\app\Models\Setting as BaseSetting;
use Illuminate\Support\Str;

class Setting extends BaseSetting
{
    protected $fillable = ['key','name','description','value','field','active'];

    public static function boot()
    {
        parent::boot();
        static::deleted(function($obj) {
            \Storage::disk('public')->delete($obj->image);
        });
    }



    public function setValueAttribute($value)
    {
        $attribute_name = "value";
        $disk = "public";
        $destination_path = "setting";


        // if a base64 was sent, store it in the db
        if (Str::startsWith($value, 'data:image'))
        {
            // 0. Make the image
            $image = \Image::make($value)->encode('jpg', 90);

            // 1. Generate a filename.
            $filename = md5($value.time()).'.jpg';

            // 2. Store the image on disk.
            \Storage::disk($disk)->put($destination_path.'/'.$filename, $image->stream());

            // 3. Delete the previous image, if there was one.
            \Storage::disk($disk)->delete($this->{$attribute_name});

            // 4. Save the public path to the database
            // but first, remove "public/" from the path, since we're pointing to it
            // from the root folder; that way, what gets saved in the db
            // is the public URL (everything that comes after the domain name)
            $public_destination_path = Str::replaceFirst('public/', '', $destination_path);
            $this->attributes[$attribute_name] = 'storage/'.$public_destination_path.'/'.$filename;
        }else{
            $this->attributes[$attribute_name] = $value;
        }
    }
}
