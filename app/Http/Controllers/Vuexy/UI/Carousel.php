<?php

namespace App\Http\Controllers\Vuexy\UI;

use App\Http\Controllers\Controller;

class Carousel extends Controller
{
    public function index()
    {
        return view('content.vuexy.ui.carousel');
    }
}
