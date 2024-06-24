<?php

namespace App\Http\Controllers\Vuexy\Layouts;

use App\Http\Controllers\Controller;

class Blank extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.layouts.blank', ['pageConfigs' => $pageConfigs]);
    }
}
