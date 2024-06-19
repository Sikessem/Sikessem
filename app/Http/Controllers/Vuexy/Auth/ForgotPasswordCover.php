<?php

namespace App\Http\Controllers\Vuexy\Auth;

use App\Http\Controllers\Controller;

class ForgotPasswordCover extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.auth-forgot-password-cover', ['pageConfigs' => $pageConfigs]);
    }
}
