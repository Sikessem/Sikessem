<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class AccountSettingsBilling extends Controller
{
    public function index()
    {
        return view('content.vuexy.pages.account-settings-billing');
    }
}
