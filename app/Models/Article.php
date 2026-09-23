<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Image;
use Storage;

class Article extends \Backpack\NewsCRUD\app\Models\Article
{

    const ARTICLE_PUBLISHED = 1;
    const ARTICLE_DRAFT = 0;
    const APPROVAL_DEFAULT = 0;
    const APPROVAL_REQUEST = 1;
    const APPROVAL_APPROVE = 2;
    const APPROVAL_REJECT = 9;

    protected $fillable = ['slug', 'title', 'content', 'image', 'image2', 'image3', 'image4', 'image5', 'status', 'category_id', 'featured', 'date','user_id', 'approval_status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getImageUrlAttribute(){
        return empty($this->image) ? 'assets/img/blog/blog1.jpg' : asset('storage/'.$this->image);
    }

    public static function boot()
    {
        parent::boot();
        static::deleted(function($obj) {
            Storage::disk('public')->delete($obj->image);
        });
    }


    public function setImageAttribute($value)
    {
        $this->ImageLogic($value, 'image');
    }

    public function setImage2Attribute($value)
    {
        $this->ImageLogic($value, 'image2');
    }

    public function setImage3Attribute($value)
    {
        $this->ImageLogic($value, 'image3');
    }

    public function setImage4Attribute($value)
    {
        $this->ImageLogic($value, 'image4');
    }

    public function setImage5Attribute($value)
    {
        $this->ImageLogic($value, 'image5');
    }

    public function getImageUrl2Attribute()
    {
        return $this->ImageLogicUrl('image2');
    }
    
    public function getImageUrl3Attribute()
    {
        return $this->ImageLogicUrl('image3');
    }

    public function getImageUrl4Attribute()
    {
        return $this->ImageLogicUrl('image4');
    }

    public function getImageUrl5Attribute()
    {
        return $this->ImageLogicUrl('image5');
    }

    public function ImageLogic($value, $attribute_name)
    {
        // or use your own disk, defined in config/filesystems.php
        $disk = "public";
        // destination path relative to the disk above
        $destination_path = "article";
        
        // if the image was erased
        if ($value==null) {
            // delete the image from disk
            Storage::disk($disk)->delete($this->{$attribute_name});
            
            // set null in the database column
            $this->attributes[$attribute_name] = null;
        }
        
        // if a base64 was sent, store it in the db
        if (Str::startsWith($value, 'data:image'))
        {
            
            // 0. Make the image
            $image = Image::make($value)->encode('jpg', 90);

            // 1. Generate a filename.
            $filename = md5($value.time()).'.jpg';

            // 2. Store the image on disk.
            Storage::disk($disk)->put($destination_path.'/'.$filename, $image->stream());

            // 3. Delete the previous image, if there was one.
            Storage::disk($disk)->delete($this->{$attribute_name});

            // 4. Save the public path to the database
            // but first, remove "public/" from the path, since we're pointing to it
            // from the root folder; that way, what gets saved in the db
            // is the public URL (everything that comes after the domain name)
            $public_destination_path = Str::replaceFirst('public/', '', $destination_path);
            $this->attributes[$attribute_name] = $public_destination_path.'/'.$filename;
        }
    }

    public function ImageLogicUrl($attribute_name = 'image')
    {
        return empty($this->$attribute_name) ? 'assets/img/blog/blog1.jpg' : asset('storage/'.$this->$attribute_name);
    }
}
