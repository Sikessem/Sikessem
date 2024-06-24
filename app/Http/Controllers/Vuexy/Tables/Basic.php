<?php

namespace App\Http\Controllers\Vuexy\Tables;

use App\Http\Controllers\Controller;

class Basic extends Controller
{
    public function index()
    {
        return view('content.vuexy.tables.basic');
    }
}
