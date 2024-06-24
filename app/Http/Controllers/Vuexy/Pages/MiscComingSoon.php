<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class MiscComingSoon extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.pages.misc-comingsoon', ['pageConfigs' => $pageConfigs]);
    }
}
