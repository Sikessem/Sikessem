<?php

namespace App\Http\Controllers\Vuexy\Maps;

use App\Http\Controllers\Controller;

class Leaflet extends Controller
{
    public function index()
    {
        return view('content.vuexy.maps.leaflet');
    }
}
