<?php

namespace App\Http\Controllers\Vuexy\Tables;

use App\Http\Controllers\Controller;

class DatatableBasic extends Controller
{
    public function index()
    {
        return view('content.vuexy.tables.datatables-basic');
    }
}
