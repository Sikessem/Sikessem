<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class UserProfile extends Controller
{
    public function index()
    {
        return view('content.vuexy.pages.profile-user');
    }
}
