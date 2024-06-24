<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class AccountSettingsConnections extends Controller
{
    public function index()
    {
        return view('content.vuexy.pages.account-settings-connections');
    }
}
