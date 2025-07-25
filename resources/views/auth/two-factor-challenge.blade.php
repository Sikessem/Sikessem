<x-auth-layout title="Confirmez l'accès à votre compte">
    <div x-data="{ recovery: false }">
        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400" x-show="! recovery">
            {{ __('Please confirm access to your account by entering the authentication code provided by your authenticator application.') }}
        </div>

        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400" x-cloak x-show="recovery">
            {{ __('Please confirm access to your account by entering one of your emergency recovery codes.') }}
        </div>

        <form method="POST" action="{{ route('two-factor.login') }}">
            @csrf

            <div class="field mt-4" x-show="! recovery">
                <x-input id="code" class="block mt-1 w-full" type="text" inputmode="numeric" name="code" autofocus x-ref="code" autocomplete="one-time-code" />
                <x-label for="code" value="{{ __('Code') }}" />
            </div>

            <div class="field mt-4" x-cloak x-show="recovery">
                <x-input id="recovery_code" class="block mt-1 w-full" type="text" name="recovery_code" x-ref="recovery_code" autocomplete="one-time-code" />
                <x-label for="recovery_code" value="{{ __('Recovery Code') }}" />
            </div>

            <div class="group mt-4">
                <button type="button" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer"
                                x-show="! recovery"
                                x-on:click="
                                    recovery = true;
                                    $nextTick(() => { $refs.recovery_code.focus() })
                                ">
                    {{ __('Use a recovery code') }}
                </button>

                <button type="button" class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer"
                                x-cloak
                                x-show="recovery"
                                x-on:click="
                                    recovery = false;
                                    $nextTick(() => { $refs.code.focus() })
                                ">
                    {{ __('Use an authentication code') }}
                </button>

                <x-button class="ms-4">
                    {{ __('Log in') }}
                </x-button>
            </div>
        </form>
    </div>
</x-auth-layout>
