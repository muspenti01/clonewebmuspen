<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    use HasFactory;

    protected $fillable = ['name','body','email','status','article_id'];

    const STATUS_DRAFT = 'draft';
    const STATUS_PUBLISH = 'publish';

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
