<?php
use function Laravel\Folio\name;

name('home');
?>
<x-app-layout class="home" title="Welcome">
    <header class="app-header">
        <nav class="navbar">
            <x-application-brand height="40" />
            <div class="group">
                <a href="{{ route('login') }}" wire:navigate class="button secondary outline">Connexion</a>
                <a href="{{ route('register') }}" wire:navigate class="button primary">Inscription</a>
            </div>
        </nav>
    </header>

    <main class="app-wrapper">
        <section class="hero">
            <div class="bg-grid"></div>
            <div class="orb-container">
                <div class="orb orb-main"></div>
            </div>
            <div class="hero-content container">
                <h1 class="title">La Plateforme Numérique de Nouvelle Génération</h1>
                <p class="tagline">Réalisez l'impossible avec {{ config('app.title') }} : <b>Donnez vie à vos rêves !</b></p>
                <a href="{{ route('auth') }}" wire:navigate.hover class="cta button lg">Démarrer l'aventure maintenant</a>
            </div>
        </section>
    </main>

    <footer class="app-footer">
        <div class="container">
            <p>&copy; <time datetime="{{ date('Y') }}">{{ date('Y') }}</time> {{ config('app.title') }}. Tous droits réservés.</p>
        </div>
    </footer>
</x-app-layout>
