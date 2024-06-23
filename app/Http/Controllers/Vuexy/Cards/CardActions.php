<?php

namespace App\Http\Controllers\Vuexy\Cards;

use App\Http\Controllers\Controller;

class CardActions extends Controller
{
    public function index()
    {
        return view('content.vuexy.cards-actions');
    }
}
