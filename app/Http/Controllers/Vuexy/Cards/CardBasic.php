<?php

namespace App\Http\Controllers\Cards;

use App\Http\Controllers\Controller;

class CardBasic extends Controller
{
    public function index()
    {
        return view('content.vuexy.cards-basic');
    }
}
