<?php

namespace App\Models;
use Backpack\NewsCRUD\app\Models\Tag as BaseTag;

class Tag extends BaseTag
{
    public function Galleries()
    {
        return $this->belongsToMany(Gallery::class);
    }
}
