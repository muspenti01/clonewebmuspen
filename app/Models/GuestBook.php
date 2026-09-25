<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GuestBook extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    use HasFactory;

    const VISITOR_TYPE_TOURIST = 'tourist';
    const VISITOR_TYPE_UMUM   = 'umum';
    const VISITOR_TYPE_PELAJAR  = 'pelajar';


    protected $fillable = [
        'visitor_type',
        'age',
        'tourist',
        'name',
        'sex',
        'no_whatsapp',
        'email',
        'group_name',
        'group_member_total',
        'image_url',
        'subs',
        'category',
        'school',
        'origin',
    ];

    public function surveys()
    {
        return $this->hasMany(Survey::class);
    }
}
