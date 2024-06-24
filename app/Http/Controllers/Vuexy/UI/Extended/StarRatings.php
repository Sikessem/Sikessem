<?php

namespace App\Http\Controllers\Vuexy\UI\Extended;

use App\Http\Controllers\Controller;

class StarRatings extends Controller
{
    public function index()
    {
        return view('content.vuexy.ui.extended.star-ratings');
    }
}
