<?php

namespace App\Http\Controllers\Vuexy\Layouts;

use App\Http\Controllers\Controller;

class ContentNavbar extends Controller
{
    public function index()
    {
        return view('content.vuexy.layouts.content-navbar');
    }
}
