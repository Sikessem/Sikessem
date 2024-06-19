<?php

namespace App\Http\Controllers\Vuexy;

use App\Http\Controllers\Controller;

class UserViewNotifications extends Controller
{
    public function index()
    {
        return view('content.vuexy.app-user-view-notifications');
    }
}
