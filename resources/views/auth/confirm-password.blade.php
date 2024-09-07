<x-auth-layout title="Confirmez votre mot de passe">
    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {{ __('This is a secure area of the application. Please confirm your password before continuing.') }}
    </div>

    <form method="POST" action="{{ route('password.confirm') }}">
        @csrf

        <div class="field">
            <x-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="current-password" autofocus />
            <x-label for="password" value="{{ __('Password') }}" />
        </div>

        <div class="group justify-end mt-4">
            <x-button class="ms-4">
                {{ __('Confirm') }}
            </x-button>
        </div>
    </form>
</x-auth-layout>
