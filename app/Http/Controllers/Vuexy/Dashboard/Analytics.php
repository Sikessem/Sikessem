<?php

namespace App\Http\Controllers\Vuexy\Dashboard;

use App\Http\Controllers\Controller;

class Analytics extends Controller
{
    public function index()
    {
        return view('content.vuexy.dashboard.analytics');
    }
}
