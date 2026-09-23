<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    use HasFactory;

    const CATEGORY_OFFLINE = 'offline';
    const CATEGORY_ONLINE = 'online';

    const SESSION_TYPE_0 = 'SESSION_0';
    const SESSION_TYPE_1 = 'SESSION_1';
    const SESSION_TYPE_2 = 'SESSION_2';

    const BOOKING_EVENT_ONLINE_ID = 'online';
    const BOOKING_EVENT_OFFLINE_SESSION_1_ID = 'offline_1';
    const BOOKING_EVENT_OFFLINE_SESSION_2_ID = 'offline_2';

    const APPROVAL_DEFAULT = 0;
    const APPROVAL_REQUEST = 1;
    const APPROVAL_APPROVE = 2;
    const APPROVAL_REJECT = 9;

    const TYPE_EVENT = 'event';
    const TYPE_MUSEUM = 'museum';
    protected $casts = [
        'date' => 'datetime:Y-m-d H:00',
        'end_date' => 'datetime:Y-m-d H:00'
    ];

    protected $fillable = [
        'name',
        'email',
        'place',
        'event_id',
        'visitor',
        'phone',
        'category',
        'date',
        'type',
        'approval_status',
    ];


    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
