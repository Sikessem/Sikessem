<?php
use function Laravel\Folio\name;

name('home');
?>
@section('head')
    @vite(['resources/design/home.css', 'resources/design/home.js'])
@endsection
<x-base-layout noApp>
  <header>
    <nav class="container">
      <x-application-brand height="40" />
      <div class="auth-buttons">
        <a href="{{ route('login') }}" class="cta-button login-btn">Connexion</a>
        <a href="{{ route('register') }}" class="cta-button register-btn">Inscription</a>
      </div>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="grid"></div>
      <div class="orb-container">
        <div class="orb main-orb"></div>
      </div>
      <div class="hero-content container">
        <h1>La Plateforme Numérique de Nouvelle Génération</h1>
        <p>Réalisez l'impossible avec {{ config('app.title') }} : <b>Donnez vie à vos rêves !</b></p>
        <a href="{{ route('auth.index') }}" class="cta-button">Démarrer l'aventure maintenant</a>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2023 NexusTech. Tous droits réservés.</p>
    </div>
  </footer>
</x-base-layout>
