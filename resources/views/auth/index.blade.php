<x-auth-layout title="Rejoignez-nous">
    <form action="{{ route('auth') }}" id="auth-form" method="POST">
        @csrf
        <div class="field">
            <input type="email" id="email" name="email" required>
            <label for="email">Adresse email</label>
        </div>
        <button type="submit">Rejoindre</button>
    </form>
    <div class="group">
        <a href="{{ route('login') }}" class="secondary">Se connecter</a>
        <a href="{{ route('register') }}" class="secondary">S'inscrire</a>
    </div>
</x-auth-layout>
