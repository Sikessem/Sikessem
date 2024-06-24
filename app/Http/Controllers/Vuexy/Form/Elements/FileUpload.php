<?php

namespace App\Http\Controllers\Vuexy\Form\Elements;

use App\Http\Controllers\Controller;

class FileUpload extends Controller
{
    public function index()
    {
        return view('content.vuexy.form.elements.-file-upload');
    }
}
