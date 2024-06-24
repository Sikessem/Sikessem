<?php

namespace App\Http\Controllers\Vuexy\Pages;

use App\Http\Controllers\Controller;

class AccountSettingsNotifications extends Controller
{
    public function index()
    {
        return view('content.vuexy.pages.account-settings-notifications');
    }
}
