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

    public function getImageUrlAttribute()
    {
        return $this->ImageLogicUrl('image');
    }

    public static function boot()
    {
        parent::boot();
        static::deleted(function($obj) {
            foreach (['image', 'image2', 'image3', 'image4', 'image5'] as $attr) {
                if (!empty($obj->{$attr})) {
                    $path = Str::contains($obj->{$attr}, 'article/')
                        ? 'article/' . Str::afterLast($obj->{$attr}, 'article/')
                        : $obj->{$attr};
                    $path = explode('?', $path)[0];
                    $path = explode('#', $path)[0];
                    Storage::disk('public')->delete($path);
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

        $cleanDiskPath = function ($path) use ($destination_path) {
            if (empty($path)) return null;
            if (Str::contains($path, $destination_path . '/')) {
                $filename = Str::afterLast($path, $destination_path . '/');
                $filename = explode('?', $filename)[0];
                $filename = explode('#', $filename)[0];
                return $destination_path . '/' . ltrim($filename, '/');
            }
            return ltrim(Str::replaceFirst('storage/', '', ltrim($path, '/')), '/');
        };

        // If image was cleared
        if ($value === null || $value === '') {
            if (!empty($this->{$attribute_name})) {
                $oldPath = $cleanDiskPath($this->{$attribute_name});
                if ($oldPath) {
                    Storage::disk($disk)->delete($oldPath);
                }
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
                $newPath = $destination_path . '/' . $filename;
                Storage::disk($disk)->put($newPath, (string) $encoded);

                if (!empty($this->{$attribute_name})) {
                    $oldPath = $cleanDiskPath($this->{$attribute_name});
                    if ($oldPath && $oldPath !== $newPath) {
                        Storage::disk($disk)->delete($oldPath);
                    }
                }

                $this->attributes[$attribute_name] = $newPath;
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
                $newPath = $destination_path . '/' . $filename;
                Storage::disk($disk)->put($newPath, (string) $encoded);

                if (!empty($this->{$attribute_name})) {
                    $oldPath = $cleanDiskPath($this->{$attribute_name});
                    if ($oldPath && $oldPath !== $newPath) {
                        Storage::disk($disk)->delete($oldPath);
                    }
                }

                $this->attributes[$attribute_name] = $newPath;
                $image->destroy();
            } catch (\Exception $e) {
                \Log::error("Failed to process base64 image for {$attribute_name}: " . $e->getMessage());
            }
            return;
        }

        // If it's an existing string path or URL (e.g. from Backpack update form where image was not re-cropped)
        if (is_string($value)) {
            if (Str::contains($value, $destination_path . '/')) {
                $this->attributes[$attribute_name] = $cleanDiskPath($value);
            } elseif (Str::startsWith($value, ['http://', 'https://'])) {
                // External URL that does not belong to storage article
                $this->attributes[$attribute_name] = $value;
            } else {
                $clean = $cleanDiskPath($value);
                $this->attributes[$attribute_name] = !empty($clean) ? $clean : null;
            }
        }
    }

    public function ImageLogicUrl($attribute_name = 'image')
    {
        $val = $this->{$attribute_name};
        if (empty($val)) {
            return asset('assets/img/blog/blog1.jpg');
        }

        // If it contains 'article/', safely extract the relative path and generate the asset storage URL
        if (Str::contains($val, 'article/')) {
            $filename = Str::afterLast($val, 'article/');
            $filename = explode('?', $filename)[0];
            $filename = explode('#', $filename)[0];
            return asset('storage/article/' . ltrim($filename, '/'));
        }

        // If it's already an external full URL
        if (Str::startsWith($val, ['http://', 'https://'])) {
            return $val;
        }

        // If it starts with storage/
        if (Str::startsWith($val, 'storage/')) {
            return asset($val);
        }

        // If it starts with assets/
        if (Str::startsWith($val, 'assets/')) {
            return asset($val);
        }

        return asset('storage/' . ltrim($val, '/'));
    }
}
