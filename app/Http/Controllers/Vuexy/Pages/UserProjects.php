<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class UserProjects extends Controller
{
    public function index()
    {
        return view('content.vuexy.pages.profile-projects');
    }
}
