<?php

namespace App\Http\Controllers\Vuexy\Wizard;

use App\Http\Controllers\Controller;

class Checkout extends Controller
{
    public function index()
    {
        return view('content.vuexy.wizard.checkout');
    }
}
