<?php

namespace App\Http\Controllers\Vuexy\Layouts;

use App\Http\Controllers\Controller;

class Horizontal extends Controller
{
    public function index()
    {

        $pageConfigs = ['myLayout' => 'horizontal'];

        return view('content.vuexy.dashboard.analytics', ['pageConfigs' => $pageConfigs]);
    }
}
