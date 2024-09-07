<x-auth-layout title="Connectez-vous">
    <form method="POST" action="{{ route('login') }}">
        @csrf

        <div class="field">
            <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-label for="email" value="{{ __('Email') }}" />
        </div>

        <div class="field mt-4">
            <x-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="current-password" />
            <x-label for="password" value="{{ __('Password') }}" />
        </div>


        <div class="button-group">
            <div class="block mt-4">
                <label for="remember_me" class="remember-field">
                    <x-checkbox id="remember_me" name="remember" />
                    <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">{{ __('Remember me') }}</span>
                </label>
            </div>

            <x-button class="ms-4">
                {{ __('Log in') }}
            </x-button>
        </div>
        @if (Route::has('password.request'))
        <div class="forgot-password">
            <a href="{{ route('password.request') }}" class="secondary" wire:navigate>Mot de passe oublié ?</a>
        </div>
        @endif

        @if (Route::has('register'))
        <div class="inline-item">
            Pas encore de compte ? <a href="{{ route('register') }}" class="secondary" wire:navigate.hover>S'inscrire</a>
        </div>
        @endif
    </form>
</x-auth-layout>
