<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;
use Storage;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Collection extends Model
{
    use HasSlug;
    use CrudTrait;
    use HasFactory;

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    const STATUS_DRAFT = 'draft';
    const STATUS_PUBLISH = 'publish';

    const AVAILABLE = 'available';
    const UNAVAILABLE = 'unavailable';

    const BORROWED = 'borrowed';
    const ONDISPLAY = 'ondisplay';

    protected $casts = [
        'photos' => 'array'
    ];

    protected $fillable = [
        'title',
        'description',
        'file',
        'collection_category_id',
        'status',
        'registration_number',
        'registration_year',
        'inventory_number',
        'contributor',
        'bahan',
        'ukuran',
        'photos',
        'available',
        'available_note',
        'category_id',
        'user_id',
    ];

    public static function boot()
    {
        parent::boot();
        static::deleting(function($obj) {
            if (count((array)$obj->photos)) {
                foreach ((array)$obj->photos as $file_path) {
                    Storage::disk('public')->delete($file_path);
                }
            }
        });
    }

    public function category()
    {
        return $this->belongsTo(CollectionCategory::class);
    }


    public function setFileAttribute($value)
    {
        $attribute_name = "file";
        $disk = "public";
        $destination_path = "uploads/collection";

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

    public function setPhotosAttribute($value)
    {
        $attribute_name = "photos";
        $disk = "public";
        $destination_path = "collections";

        $this->uploadMultipleFilesToDisk($value, $attribute_name, $disk, $destination_path);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
