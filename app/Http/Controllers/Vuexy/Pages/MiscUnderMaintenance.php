<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class MiscUnderMaintenance extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.pages.misc-under-maintenance', ['pageConfigs' => $pageConfigs]);
    }
}
