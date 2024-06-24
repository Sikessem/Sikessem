<?php

namespace App\Http\Controllers\Vuexy\Layouts;

use App\Http\Controllers\Controller;

class Vertical extends Controller
{
    public function index()
    {

        $pageConfigs = ['myLayout' => 'vertical'];

        return view('content.vuexy.dashboard.analytics', ['pageConfigs' => $pageConfigs]);
    }
}
