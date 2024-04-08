<x-guest-layout>
    <x-authentication-card>
        <x-slot name="logo">
            <x-authentication-card-logo />
        </x-slot>

        <div class="mb-4 text-sm text-indigo-600 dark:text-indigo-400">
            {{ __('Mot de passe oublié ? Aucun problème ! Laissez-nous juste votre adresse e-mail et nous vous enverrons un lien de ré-initialisation qui vous permettra d\'en choisir un nouveau.') }}
        </div>

        @session('status')
            <div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                {{ $value }}
            </div>
        @endsession

        <x-validation-errors class="mb-4" />

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <div class="block">
                <x-label for="email" value="{{ __('Adresse e-mail') }}" />
                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" placeholder="{{ __('Entrez votre adresse e-mail') }}" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <x-button>
                    {{ __('M\'envoyer le lien par e-mail') }}
                </x-button>
            </div>
        </form>
    </x-authentication-card>
</x-guest-layout>
