<?php

namespace App\Http\Controllers\Vuexy\Layouts;

use App\Http\Controllers\Controller;

class Fluid extends Controller
{
    public function index()
    {
        $pageConfigs = ['contentLayout' => 'wide'];

        return view('content.vuexy.layouts.fluid', ['pageConfigs' => $pageConfigs]);
    }
}
