<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        // jika user masih login lempar ke home
        if (Auth::check()) {
            return redirect(backpack_url('dashboard'));
        }

        $googleUser = Socialite::driver('google')->user();
        $user = User::where('google_id', $googleUser->id)->first();
        if ($user) {
            Auth::loginUsingId($user->id);
            return redirect(backpack_url('dashboard'));
        } else {
            $newUser = User::create([
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'google_id'=> $googleUser->id,
                // password tidak akan digunakan ;)
                'password' => bcrypt($googleUser->token),
            ]);
            Auth::login($newUser);
            return redirect(backpack_url('dashboard'));
        }
    }

}
