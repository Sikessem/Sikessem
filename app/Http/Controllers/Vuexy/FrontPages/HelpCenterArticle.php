<?php

namespace App\Http\Controllers\Vuexy\FrontPages;

use App\Http\Controllers\Controller;

class HelpCenterArticle extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'front'];

        return view('content.vuexy.front-pages.help-center-article', ['pageConfigs' => $pageConfigs]);
    }
}
