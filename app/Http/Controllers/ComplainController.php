<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;

class ComplainController extends Controller
{
    public function index()
    {
        return view('landing-page.complain.index');
    }

    public function form()
    {
        return view('landing-page.complain.form');
    }


    public function storeComplain(Request $request)
    {
        $request->validate([
            'body' => 'required',
            'date' => 'required',
            'location' => 'required',
            'captcha' => 'required|captcha'
        ], [
            'captcha.required' => 'Kode captcha wajib diisi.',
            'captcha.captcha' => 'Kode captcha salah, silakan coba lagi.'
        ]);

        $complain = new Complaint;
        $complain->title = "-";
        $complain->body = $request->body;
        $complain->date = $request->date;
        $complain->location = $request->location;
        $complain->instansion = "-";
        $complain->category = "-";
        $complain->file = $request->file;
        $complain->save();

        return redirect()->back()->with('success', 'Saran aduan berhasil dikirim.');
    }


}
