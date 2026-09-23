<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryTag extends Model
{
    protected $table = 'gallery_tags';
    use HasFactory;

    protected $fillable = ['id','gallery_id','tag_id'];
}
