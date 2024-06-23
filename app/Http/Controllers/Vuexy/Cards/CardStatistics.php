<?php

namespace App\Http\Controllers\Vuexy\Cards;

use App\Http\Controllers\Controller;

class CardStatistics extends Controller
{
    public function index()
    {
        return view('content.vuexy.cards-statistics');
    }
}
