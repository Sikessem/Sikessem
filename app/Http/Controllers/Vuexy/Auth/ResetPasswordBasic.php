<?php

namespace App\Http\Controllers\Vuexy\Auth;

use App\Http\Controllers\Controller;

class ResetPasswordBasic extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.auth-reset-password-basic', ['pageConfigs' => $pageConfigs]);
    }
}
