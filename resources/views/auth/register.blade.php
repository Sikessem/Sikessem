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
            <div class="input-group">
                <x-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
                <x-label for="name" value="{{ __('Name') }}" />
            </div>

            <div class="input-group mt-4">
                <x-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autocomplete="username" />
                <x-label for="email" value="{{ __('Email') }}" />
            </div>

            <div class="input-group mt-4">
                <x-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="new-password" />
                <x-label for="password" value="{{ __('Password') }}" />
            </div>

            <div class="input-group mt-4">
                <x-input id="password_confirmation" class="block mt-1 w-full" type="password" name="password_confirmation" required autocomplete="new-password" />
                <x-label for="password_confirmation" value="{{ __('Confirm Password') }}" />
            </div>
            <div class="buttons button-group">
                @if (Route::has('login'))
                <a wire:navigate.hover class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </a>
                @endif
                <button type="button" id="nextStep1">Suivant</button>
            </div>
        </div>

        <div id="step2Form" class="hidden">
            <div class="form-group">
                <label for="firstName">Prénom</label>
                <input type="text" id="firstName" name="firstName" required>
            </div>
            <div class="form-group">
                <label for="lastName">Nom</label>
                <input type="text" id="lastName" name="lastName" required>
            </div>
            <div class="form-group">
                <label for="birthDate">Date de naissance</label>
                <input type="date" id="birthDate" name="birthDate" required>
            </div>
            <div class="buttons">
                <button type="button" id="prevStep2">Précédent</button>
                <button type="button" id="nextStep2">Suivant</button>
            </div>
        </div>

        <div id="step3Form" class="hidden">
            <div class="form-group">
                <label for="username">Nom d'utilisateur</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="bio">Biographie</label>
                <textarea id="bio" name="bio" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="interests">Centres d'intérêt</label>
                <select id="interests" name="interests" multiple>
                    <option value="tech">Technologie</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="marketing">Marketing</option>
                </select>
            </div>
            <div class="buttons">
                <button type="button" id="prevStep3">Précédent</button>

                <div class="button-group">
                    <x-button class="ms-4">
                        {{ __('Register') }}
                    </x-button>
                </div>
            </div>
        </div>

        @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())
        <div class="mt-4">
            <x-label for="terms">
                <div class="flex items-center">
                    <x-checkbox name="terms" id="terms" required />

                    <div class="ms-2">
                        {!! __('I agree to the :terms_of_service and :privacy_policy', [
                                'terms_of_service' => '<a target="_blank" href="'.route('terms.show').'" wire:navigate class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">'.__('Terms of Service').'</a>',
                                'privacy_policy' => '<a target="_blank" href="'.route('policy.show').'" wire:navigate class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">'.__('Privacy Policy').'</a>',
                        ]) !!}
                    </div>
                </div>
            </x-label>
        </div>
        @endif
    </form>
</x-auth-layout>
