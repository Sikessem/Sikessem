<?php

namespace App\Http\Controllers\Vuexy;

use App\Http\Controllers\Controller;

class InvoicePrint extends Controller
{
    public function index()
    {
        $pageConfigs = ['myLayout' => 'blank'];

        return view('content.vuexy.app-invoice-print', ['pageConfigs' => $pageConfigs]);
    }
}
