<?php

namespace App\Http\Controllers\Vuexy\Layouts;

use App\Http\Controllers\Controller;

class CollapsedMenu extends Controller
{
    public function index()
    {

        $pageConfigs = ['menuCollapsed' => true];

        return view('content.vuexy.layouts.collapsed-menu', ['pageConfigs' => $pageConfigs]);
    }
}
