<?php

namespace App\Helpers;

use App\Models\Booking;
use Illuminate\Support\Carbon;

class AppHelper
{
    public static function getProfileImage($name){
        return 'https://ui-avatars.com/api/?name=' . $name;
    }
}
