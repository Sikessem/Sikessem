<?php

namespace App\Http\Controllers\Vuexy;

use App\Http\Controllers\Controller;

class AcademyCourse extends Controller
{
    public function index()
    {
        return view('content.vuexy.app-academy-course');
    }
}
