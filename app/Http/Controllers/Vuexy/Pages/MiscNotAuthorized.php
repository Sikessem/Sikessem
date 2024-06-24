<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class MiscNotAuthorized extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.pages.misc-not-authorized', ['pageConfigs' => $pageConfigs]);
    }
}
