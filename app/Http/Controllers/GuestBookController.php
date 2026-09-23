<?php

namespace App\Http\Controllers;

use App\Models\GuestBook;
use Illuminate\Http\Request;

class GuestBookController extends Controller
{
    public function index()
    {
        return view('landing-page.guest-book');
    }
    public function create(Request $request)
    {
        if ($request->visitor_type == 'pelajar') {
            $request->validate([
                "visitor_type"   => 'max:255|required',
                "school"          => 'max:255|required',  // New for "pelajar" type
                "name"           => 'max:255|required',
                "group_name"     => 'max:255',  // Optional field for group name
                "no_whatsapp"          => 'numeric|required',
                "email"          => 'max:255|email|required',
                "group_member_total"  => 'numeric|required|min:1|max:100000',
                "captcha" => 'required|captcha'
            ], [
                'captcha.required' => 'Kode captcha wajib diisi.',
                'captcha.captcha' => 'Kode captcha salah, silakan coba lagi.'
            ]);
        } elseif ($request->visitor_type == 'umum') {
            $request->validate([
                "visitor_type"   => 'max:255|required',
                "name"           => 'max:255|required',
                "origin"         => 'max:255|required',
                "no_whatsapp"         => 'numeric|required',
                "email"          => 'max:255|email|required',
                "group_member_total"  => 'numeric|required|min:1|max:100000',
                "captcha" => 'required|captcha'
            ], [
                'captcha.required' => 'Kode captcha wajib diisi.',
                'captcha.captcha' => 'Kode captcha salah, silakan coba lagi.'
            ]);
        } elseif ($request->visitor_type == 'tourist') {
            $request->validate([
                "visitor_type"       => 'max:255|required',
                "name"               => 'max:255|required',
                "origin"               => 'max:255|required',
                "group_member_total"  => 'numeric|required|min:1|max:100000',  // For group member count
                "captcha" => 'required|captcha'
            ], [
                'captcha.required' => 'Kode captcha wajib diisi.',
                'captcha.captcha' => 'Kode captcha salah, silakan coba lagi.'
            ]);
        }

        GuestBook::create($request->all());

        return redirect(route('guest_book'))->with([
            'Success' => 'Success',
            'name'    => $request->name,
        ]);
    }
}
