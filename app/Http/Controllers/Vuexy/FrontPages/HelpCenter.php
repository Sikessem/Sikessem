<?php

namespace App\Http\Controllers\Vuexy\FrontPages;

use App\Http\Controllers\Controller;

class HelpCenter extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'front'];

        return view('content.vuexy.front-pages.help-center-landing', ['pageConfigs' => $pageConfigs]);
    }
}
