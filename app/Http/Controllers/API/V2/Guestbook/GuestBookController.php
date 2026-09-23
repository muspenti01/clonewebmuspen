<?php

namespace App\Http\Controllers\API\V2\Guestbook;

use App\Http\Controllers\Controller;
use App\Models\GuestBook;
use Illuminate\Http\Request;

class GuestBookController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'visitor_type'  => 'required|string',
            'school'        => 'string',
            'name'          => 'required|string',
            'origin'        => 'string',
            'group_name'    => 'required|string',
            'no_phone'      => 'required|string',
            'email'         => 'email|max:255',
            'visitor_total' => 'numeric',
        ]);

        GuestBook::create([
            'visitor_type'       => $request->visitor_type,
            'school'              => $request->school,
            'name'               => $request->name,
            'origin'             => $request->origin,
            'group_name'         => $request->group_name,
            'no_whatsapp'        => $request->no_phone,
            'email'              => $request->email,
            'group_member_total' => $request->visitor_total,
            'image_url'          => $request->image_url,
        ]);

        return response()->json([
            'success' => true,
            'code' => 200,
            'message' => 'Guestbook Berhasil Diinput.',
            'data' => $request->all()
        ]);
    }
}
