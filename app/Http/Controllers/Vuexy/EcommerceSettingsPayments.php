<?php

namespace App\Http\Controllers\Vuexy;

use App\Http\Controllers\Controller;

class EcommerceSettingsPayments extends Controller
{
    public function index()
    {
        return view('content.vuexy.app-ecommerce-settings-payments');
    }
}
