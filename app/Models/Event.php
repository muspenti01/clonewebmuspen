<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Event extends Model
{
    use CrudTrait;
    use HasFactory;
    use HasSlug;

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    const TYPE_EXHIBITION = 'EXHIBITION';
    const TYPE_ART = 'ART';
    const TYPE_PERFORMANCE = 'PERFORMANCE';


    const STATUS_DRAFT = 'DRAFT';
    const STATUS_PUBLISH = 'PUBLISH';
    protected $fillable = [
        'name',
        'description',
        'date',
        'file',
        'type',
        'status',
        'end_date',
        'max_visitor'
    ];

    protected $casts = [
        'date' => 'datetime:Y-m-d H:00',
        'end_date' => 'datetime:Y-m-d H:00'
    ];


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

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function setFileAttribute($value)
    {
        $attribute_name = "file";
        $disk = "public";
        $destination_path = "uploads/events";

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

    public function getAvailableSlotAttribute()
    {
        $totalBook = $this->bookings()->sum('visitor');
        return $totalBook > $this->max_visitor ? 0 :  $this->max_visitor - $totalBook;
    }
}
