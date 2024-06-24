<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class UserTeams extends Controller
{
    public function index()
    {
        return view('content.vuexy.pages.profile-teams');
    }
}
