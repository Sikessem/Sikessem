<?php

namespace App\Http\Controllers\Vuexy;

use App\Http\Controllers\Controller;

class Calendar extends Controller
{
    public function index()
    {
        return view('content.vuexy.app-calendar');
    }
}
