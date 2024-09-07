<x-auth-layout title="Réinitialisez votre mot de passe">
    <form method="POST" action="{{ route('password.update') }}">
        @csrf

        <input type="hidden" name="token" value="{{ $request->route('token') }}">

        <div class="field block">
            <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email', $request->email)" required autofocus autocomplete="username" />
            <x-label for="email" value="{{ __('Email') }}" />
        </div>

        <div class="field mt-4">
            <x-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="new-password" />
            <x-label for="password" value="{{ __('Password') }}" />
        </div>

        <div class="field mt-4">
            <x-input id="password_confirmation" class="block mt-1 w-full" type="password" name="password_confirmation" required autocomplete="new-password" />
            <x-label for="password_confirmation" value="{{ __('Confirm Password') }}" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <x-button>
                {{ __('Reset Password') }}
            </x-button>
        </div>
    </form>
</x-auth-layout>
