<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string|email',
        ]);

        $email = $data['email'];

        return to_route(User::where('email', $email)->first() ? 'login' : 'register')->with('email', $email);
    }
}
