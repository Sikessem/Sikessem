<?php

namespace App\Http\Controllers\Vuexy\Charts;

use App\Http\Controllers\Controller;

class ApexCharts extends Controller
{
    public function index()
    {
        return view('content.vuexy.charts.apex');
    }
}
