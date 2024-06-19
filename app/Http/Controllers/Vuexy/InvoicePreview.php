<?php

namespace App\Http\Controllers\Vuexy;

use App\Http\Controllers\Controller;

class InvoicePreview extends Controller
{
    public function index()
    {
        return view('content.vuexy.app-invoice-preview');
    }
}
