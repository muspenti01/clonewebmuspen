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
            foreach (['image', 'image2', 'image3', 'image4', 'image5'] as $attr) {
                if (!empty($obj->{$attr})) {
                    Storage::disk('public')->delete($obj->{$attr});
                }
            }
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
        $disk = "public";
        $destination_path = "article";
        
        // If image was cleared
        if ($value === null || $value === '') {
            if (!empty($this->{$attribute_name})) {
                Storage::disk($disk)->delete($this->{$attribute_name});
            }
            $this->attributes[$attribute_name] = null;
            return;
        }

        // If an UploadedFile instance was sent (direct file upload)
        if ($value instanceof \Illuminate\Http\UploadedFile) {
            try {
                $image = Image::make($value);
                if ($image->width() > 1600 || $image->height() > 1600) {
                    $image->resize(1600, 1600, function ($constraint) {
                        $constraint->aspectRatio();
                        $constraint->upsize();
                    });
                }
                $encoded = $image->encode('jpg', 85);

                $filename = md5(uniqid((string) microtime(true), true) . mt_rand()) . '.jpg';
                Storage::disk($disk)->put($destination_path . '/' . $filename, (string) $encoded);

                if (!empty($this->{$attribute_name}) && $this->{$attribute_name} !== $destination_path . '/' . $filename) {
                    Storage::disk($disk)->delete($this->{$attribute_name});
                }

                $this->attributes[$attribute_name] = $destination_path . '/' . $filename;
                $image->destroy();
            } catch (\Exception $e) {
                \Log::error("Failed to process uploaded file for {$attribute_name}: " . $e->getMessage());
            }
            return;
        }
        
        // If a base64 string was sent (from cropper or data URL)
        if (is_string($value) && Str::startsWith($value, 'data:image')) {
            try {
                $image = Image::make($value);
                if ($image->width() > 1600 || $image->height() > 1600) {
                    $image->resize(1600, 1600, function ($constraint) {
                        $constraint->aspectRatio();
                        $constraint->upsize();
                    });
                }
                $encoded = $image->encode('jpg', 85);

                $filename = md5(uniqid((string) microtime(true), true) . mt_rand()) . '.jpg';
                Storage::disk($disk)->put($destination_path . '/' . $filename, (string) $encoded);

                if (!empty($this->{$attribute_name}) && $this->{$attribute_name} !== $destination_path . '/' . $filename) {
                    Storage::disk($disk)->delete($this->{$attribute_name});
                }

                $this->attributes[$attribute_name] = $destination_path . '/' . $filename;
                $image->destroy();
            } catch (\Exception $e) {
                \Log::error("Failed to process base64 image for {$attribute_name}: " . $e->getMessage());
            }
            return;
        }

        // If it's already a saved string path or URL, keep it
        if (is_string($value)) {
            $this->attributes[$attribute_name] = $value;
        }
    }

    public function ImageLogicUrl($attribute_name = 'image')
    {
        return empty($this->$attribute_name) ? asset('assets/img/blog/blog1.jpg') : asset('storage/' . ltrim($this->$attribute_name, '/'));
    }
}
