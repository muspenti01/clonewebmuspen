<?php

namespace  App\Http\Controllers\Auth;


use Backpack\CRUD\app\Http\Controllers\Auth\LoginController as BaseLoginController;

class LoginController extends BaseLoginController {

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showLoginForm()
    {
        $this->data['title'] = trans('backpack::base.login'); // set the page title
        $this->data['username'] = $this->username();

        return view(backpack_view('auth.login'), $this->data);
    }


}
