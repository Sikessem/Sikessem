<?php

namespace App\Http\Controllers\Vuexy\Charts;

use App\Http\Controllers\Controller;

class ChartJs extends Controller
{
    public function index()
    {
        return view('content.vuexy.charts.chartjs');
    }
}
