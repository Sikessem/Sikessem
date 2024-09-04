<x-auth-layout title="Rejoignez-nous">
    <form action="{{ route('auth') }}" id="auth-form" method="POST">
        @csrf
        <div class="input-group">
            <input type="email" id="email" name="email" required>
            <label for="email">Adresse email</label>
        </div>
        <button type="submit">Rejoindre</button>
    </form>
    <div class="links">
        <a href="{{ route('login') }}" class="login-link">Se connecter</a>
        <a href="{{ route('register') }}" class="register-link">S'inscrire</a>
    </div>
</x-auth-layout>
