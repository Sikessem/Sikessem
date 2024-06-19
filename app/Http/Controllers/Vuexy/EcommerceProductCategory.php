<?php

namespace App\Http\Controllers\Vuexy;

use App\Http\Controllers\Controller;

class EcommerceProductCategory extends Controller
{
    public function index()
    {
        return view('content.vuexy.app-ecommerce-category-list');
    }
}
