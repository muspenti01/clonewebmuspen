<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'body' => 'required|string|min:15|max:5000',
            'email' => 'required|email',
            'article_id' => 'required|integer',
            'captcha' => 'required|captcha',
            'hp' => 'nullable|max:0',
        ], [
            'captcha.required' => 'Kode captcha wajib diisi.',
            'captcha.captcha' => 'Kode captcha salah. Silakan coba lagi.',
            'body.min' => 'Komentar terlalu pendek. Minimal 15 karakter.',
            'body.required' => 'Isi komentar wajib diisi.',
            'name.required' => 'Nama wajib diisi.',
            'name.max' => 'Nama terlalu panjang (maksimal 100 karakter).',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
        ]);

        try {
            Comment::create([
                'name' => $request->name,
                'email' => $request->email,
                'body' => $request->body,
                'article_id' => $request->article_id,
                'status' => '0',
                'parent_id' => null,
            ]);

            if ($request->ajax()) {
                return response()->json(['message' => 'Komentar berhasil dikirim dan menunggu moderasi admin.'], 200);
            }

            return redirect()->back()->with('success', 'Komentar berhasil dikirim dan menunggu moderasi admin.');
        } catch (\Exception $e) {
            if ($request->ajax()) {
                return response()->json(['message' => 'Gagal mengirim komentar. Silakan coba lagi.'], 500);
            }
            return redirect()->back()->with('error', 'Gagal mengirim komentar.');
        }
    }
}
