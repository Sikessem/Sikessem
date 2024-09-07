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
                <x-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
                <x-label for="name" value="{{ __('Name') }}" />
            </div>

            <div class="field mt-4">
                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autocomplete="username" />
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
                <x-input type="text" id="firstName" name="firstName" required />
                <x-label for="firstName">Prénom</x-label>
            </div>
            <div class="field">
                <x-input type="text" id="lastName" name="lastName" required />
                <x-label for="lastName">Nom</x-label>
            </div>
            <div class="field">
                <x-input type="date" id="birthDate" name="birthDate" required />
                <x-label for="birthDate">Date de naissance</x-label>
            </div>
            <div class="group">
                <x-button type="button" id="prevStep2">Précédent</x-button>
                <x-button type="button" id="nextStep2">Suivant</x-button>
            </div>
        </div>

        <div id="step3Form" class="hidden">
            <div class="field">
                <x-label for="username">Nom d'utilisateur</x-label>
                <x-input type="text" id="username" name="username" required />
            </div>
            <div class="field">
                <x-label for="bio">Biographie</x-label>
                <textarea id="bio" name="bio" rows="3"></textarea>
            </div>
            <div class="field">
                <x-label for="interests">Centres d'intérêt</x-label>
                <select id="interests" name="interests" multiple>
                    <option value="tech">Technologie</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="marketing">Marketing</option>
                </select>
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
