<?php

namespace App\Http\Controllers\Vuexy\UI;

use App\Http\Controllers\Controller;

class TabsPills extends Controller
{
    public function index()
    {
        return view('content.vuexy.ui.tabs-pills');
    }
}
