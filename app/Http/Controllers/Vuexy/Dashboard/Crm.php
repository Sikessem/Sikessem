<?php

namespace App\Http\Controllers\Vuexy\Dashboard;

use App\Http\Controllers\Controller;

class Crm extends Controller
{
    public function index()
    {
        return view('content.vuexy.dashboard.crm');
    }
}
