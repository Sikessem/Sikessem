<?php
use function Laravel\Folio\name;

name('home');
?>
<x-base-layout id="home" title="Welcome">
    <header class="app-header">
        <nav class="navbar">
            <x-application-brand height="40" />
            <div class="auth-buttons">
                <a href="{{ route('login') }}" class="cta-button login-btn">Connexion</a>
                <a href="{{ route('register') }}" class="cta-button register-btn">Inscription</a>
            </div>
        </nav>
    </header>

    <main class="app-wrapper">
        <section id="home" class="hero">
            <div class="bg-grid"></div>
            <div class="orb-container">
                <div class="orb orb-main"></div>
            </div>
            <div class="hero-content container">
                <h1 class="title">La Plateforme Numérique de Nouvelle Génération</h1>
                <p class="tagline">Réalisez l'impossible avec {{ config('app.title') }} : <b>Donnez vie à vos rêves !</b></p>
                <a href="{{ route('auth') }}" class="cta button outline">Démarrer l'aventure maintenant</a>
            </div>
        </section>
    </main>

    <footer class="app-footer">
        <div class="container">
            <p>&copy; <time datetime="{{ date('Y') }}">{{ date('Y') }}</time> {{ config('app.title') }}. Tous droits réservés.</p>
        </div>
    </footer>
</x-base-layout>
