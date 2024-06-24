<?php

namespace App\Http\Controllers\Vuexy\FrontPages;

use App\Http\Controllers\Controller;

class Pricing extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'front'];

        return view('content.vuexy.front-pages.pricing-page', ['pageConfigs' => $pageConfigs]);
    }
}
