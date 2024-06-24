<?php

namespace App\Http\Controllers\Vuexy\FrontPages;

use App\Http\Controllers\Controller;

class Payment extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'front'];

        return view('content.vuexy.front-pages.payment-page', ['pageConfigs' => $pageConfigs]);
    }
}
