@section('head')
@vite(['resources/design/styles/auth.css', 'resources/design/scripts/auth.js'])
@endsection
<x-base-layout title="Connexion" noApp>
    <div class="orbs">
        <div id="orb1" class="orb"></div>
        <div id="orb2" class="orb"></div>
    </div>

    <div class="auth-container">
        <div class="auth-content">
        <h1>Authentication</h1>
        <form action="{{ route('auth') }}" id="auth-form" method="POST">
            @csrf
            <div class="input-group">
                <input type="email" id="email" name="email" required>
                <label for="email">Adresse email</label>
            </div>
            <button type="submit">Continuer</button>
        </form>
        <div class="links">
            <a href="{{ route('login') }}" class="login-link">Se connecter</a>
            <a href="{{ route('register') }}" class="register-link">S'inscrire</a>
        </div>
        </div>
    </div>
</x-base-layout>
