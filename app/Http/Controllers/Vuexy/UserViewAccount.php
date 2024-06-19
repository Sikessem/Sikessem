<?php

namespace App\Http\Controllers\Vuexy;

use App\Http\Controllers\Controller;

class UserViewAccount extends Controller
{
    public function index()
    {
        return view('content.vuexy.app-user-view-account');
    }
}
