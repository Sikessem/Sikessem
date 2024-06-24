<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class MiscError extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.pages.misc-error', ['pageConfigs' => $pageConfigs]);
    }
}
