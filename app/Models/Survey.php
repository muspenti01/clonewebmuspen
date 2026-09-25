<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use CrudTrait;
    use HasFactory;
    protected $guarded = [];

    public function guestbook()
    {
        return $this->belongsTo(GuestBook::class, 'guest_book_id');
    }

    public function getNameAttribute(){
        return isset($this->attributes['name']) ? $this->attributes['name'] : $this->guestbook?->name;
    }

    public function getPhoneAttribute(){
        return isset($this->attributes['phone']) ? $this->attributes['phone'] : $this->guestbook?->no_whatsapp;
    }

    public function getGuestBookIdAttribute(){
        return isset($this->attributes['guest_book_id']) ? $this->attributes['guest_book_id'] : '-';
    }

}
