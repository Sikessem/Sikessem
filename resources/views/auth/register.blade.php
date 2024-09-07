<x-auth-layout title="Inscrivez-vous gratuitement">
    <form method="POST" action="{{ route('register') }}">
        @csrf
        <div class="step-indicator">
            <div class="step active" id="step1">1</div>
            <div class="step-connector"></div>
            <div class="step" id="step2">2</div>
            <div class="step-connector"></div>
            <div class="step" id="step3">3</div>
        </div>
        <div id="step1Form">
            <div class="field">
                <x-input id="email" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                <x-label for="email" value="{{ __('Email') }}" />
            </div>

            <div class="field mt-4">
                <x-input id="password" type="password" name="password" required autocomplete="new-password" />
                <x-label for="password" value="{{ __('Password') }}" />
            </div>

            <div class="field mt-4">
                <x-input id="password_confirmation" type="password" name="password_confirmation" required autocomplete="new-password" />
                <x-label for="password_confirmation" value="{{ __('Confirm Password') }}" />
            </div>
            <div class="group mt-4">
                @if (Route::has('login'))
                <a wire:navigate.hover class="secondary" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </a>
                @endif
                <x-button type="button" id="nextStep1">Suivant</x-button>
            </div>
        </div>

        <div id="step2Form" class="hidden">
            <div class="field">
                <x-input id="firstname" type="text" name="firtname" :value="old('firstname')" required autofocus autocomplete="name" />
                <x-label for="firstname" value="{{ __('First Name') }}" />
            </div>
            <div class="field">
                <x-input id="lastname" type="text" name="lastname" :value="old('lastname')" />
                <x-label for="lastname" value="{{ __('Last Name') }}" />
            </div>
            <div class="field">
                <x-input type="date" id="birthdate" name="birthdate" :value="old('birthdate')" required />
                <x-label for="birthdate" value="{{ __('Birth Date') }}" />
            </div>
            <div class="group">
                <x-button type="button" id="prevStep2">Précédent</x-button>
                <x-button type="button" id="nextStep2">Suivant</x-button>
            </div>
        </div>

        <div id="step3Form" class="hidden">
            <div class="field">
                <x-input type="text" id="username" name="username" :value="old('username')" autofocus />
                <x-label for="username" value="{{ __('Username') }}" />
            </div>
            <div class="field">
                <textarea id="bio" name="bio" rows="3">{{ old('bio') }}</textarea>
                <x-label for="bio" value="{{ __('Bio') }}" />
            </div>
            <div class="group">
                <x-button type="button" id="prevStep3">Précédent</x-button>

                <x-button type="submit">
                    {{ __('Register') }}
                </x-button>
            </div>
        </div>

        @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())
        <div class="mt-4">
            <x-label for="terms">
                <div class="group">
                    <x-checkbox name="terms" id="terms" required />

                    <div class="ms-2">
                        {!! __('I agree to the :terms_of_service and :privacy_policy', [
                                'terms_of_service' => '<a target="_blank" href="'.route('terms.show').'" wire:navigate class="secondary">'.__('Terms of Service').'</a>',
                                'privacy_policy' => '<a target="_blank" href="'.route('policy.show').'" wire:navigate class="secondary">'.__('Privacy Policy').'</a>',
                        ]) !!}
                    </div>
                </div>
            </x-label>
        </div>
        @endif
    </form>
</x-auth-layout>
