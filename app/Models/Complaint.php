<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Storage;

class Complaint extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    use HasFactory;

    protected $fillable = ['title','body','date','location','instansion','category','type','file'];

    const TYPE_REPORT = 'pengaduan';
    const TYPE_ASPIRATION = 'aspirasi';
    const TYPE_REQUEST_INFO = 'permintaan informasi';

    public static function boot()
    {
        parent::boot();
        static::deleted(function($obj) {
            Storage::disk('public')->delete($obj->file);
        });
    }


    public function setFileAttribute($value)
    {
        $attribute_name = "file";
        $disk = "public";
        $destination_path = "complain";

        $this->uploadFileToDisk($value, $attribute_name, $disk, $destination_path);

    }

}
