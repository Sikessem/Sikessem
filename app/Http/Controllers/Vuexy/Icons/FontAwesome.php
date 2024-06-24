<?php

namespace App\Http\Controllers\Vuexy\Icons;

use App\Http\Controllers\Controller;

class FontAwesome extends Controller
{
    public function index()
    {
        return view('content.vuexy.icons.font-awesome');
    }
}
