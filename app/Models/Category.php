<?php

namespace App\Models;
use Backpack\NewsCRUD\app\Models\Category as BaseCategory;

class Category extends BaseCategory
{
    public function gallery()
    {
        return $this->hasMany(Gallery::class);
    }

    public function collection()
    {
        return $this->hasMany(Collection::class);
    }
}
