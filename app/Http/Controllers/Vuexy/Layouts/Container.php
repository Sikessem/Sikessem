<?php

namespace App\Http\Controllers\Vuexy\Layouts;

use App\Http\Controllers\Controller;

class Container extends Controller
{
    public function index()
    {
        $pageConfigs = ['contentLayout' => 'compact'];

        return view('content.vuexy.layouts.container', ['pageConfigs' => $pageConfigs]);
    }
}
