<?php

namespace App\Http\Controllers\Vuexy\Auth;

use App\Http\Controllers\Controller;

class LoginCover extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.auth-login-cover', ['pageConfigs' => $pageConfigs]);
    }
}
