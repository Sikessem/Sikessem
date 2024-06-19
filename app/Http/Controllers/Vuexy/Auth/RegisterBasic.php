<?php

namespace App\Http\Controllers\Vuexy\Auth;

use App\Http\Controllers\Controller;

class RegisterBasic extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.auth-register-basic', ['pageConfigs' => $pageConfigs]);
    }
}
