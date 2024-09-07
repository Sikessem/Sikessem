<x-auth-layout title="Restaurez votre mot de passe">
    <form method="POST" action="{{ route('password.email') }}">
        @csrf

        <div class="field">
            <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-label for="email" value="{{ __('Email') }}" />
        </div>

        <div class="group mt-4">
            <x-button>
                {{ __('Email Password Reset Link') }}
            </x-button>
        </div>
    </form>
</x-auth-layout>
