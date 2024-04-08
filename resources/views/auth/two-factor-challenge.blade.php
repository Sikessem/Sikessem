<x-guest-layout>
    <x-authentication-card>
        <x-slot name="logo">
            <x-authentication-card-logo />
        </x-slot>

        <div x-data="{ recovery: false }">
            <div class="mb-4 text-sm text-indigo-600 dark:text-indigo-400" x-show="! recovery">
                @lag('Vueillez confirmer l\'accès à votre compte en entrant le code d\'authentification fourni par votre application authentificateur.')
            </div>

            <div class="mb-4 text-sm text-indigo-600 dark:text-indigo-400" x-cloak x-show="recovery">
                @lang('Veuillez confirmer l\'accès en entrant l\'un de vos codes de récupération d\'urgence.')
            </div>

            <x-validation-errors class="mb-4" />

            <form method="POST" action="{{ route('two-factor.login') }}">
                @csrf

                <div class="mt-4" x-show="! recovery">
                    <x-label for="code" value="{{ __('Code') }}" />
                    <x-input id="code" class="block mt-1 w-full" type="text" inputmode="numeric" name="code" autofocus x-ref="code" autocomplete="one-time-code" placeholder="{{ __('Entrez votre code') }}" />
                </div>

                <div class="mt-4" x-cloak x-show="recovery">
                    <x-label for="recovery_code" value="{{ __('Recovery Code') }}" />
                    <x-input id="recovery_code" class="block mt-1 w-full" type="text" name="recovery_code" x-ref="recovery_code" autocomplete="one-time-code" placeholder="{{ __('Entrez votre code de récupération') }}"/>
                </div>

                <div class="flex items-center justify-end mt-4">
                    <button type="button" class="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-100 underline cursor-pointer"
                                    x-show="! recovery"
                                    x-on:click="
                                        recovery = true;
                                        $nextTick(() => { $refs.recovery_code.focus() })
                                    ">
                        @lang('Utiliser un code de récupération')
                    </button>

                    <button type="button" class="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-100 underline cursor-pointer"
                                    x-cloak
                                    x-show="recovery"
                                    x-on:click="
                                        recovery = false;
                                        $nextTick(() => { $refs.code.focus() })
                                    ">
                        @lang('Utiliser un code d\'authentification')
                    </button>

                    <x-button class="ms-4">
                        @lang('Me connecter')
                    </x-button>
                </div>
            </form>
        </div>
    </x-authentication-card>
</x-guest-layout>
