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
      <div class="nav-links">
        <a href="#home">Accueil</a>
        <a href="#features">Fonctionnalités</a>
        <a href="#pricing">Tarifs</a>
        <a href="#testimonials">Témoignages</a>
      </div>
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
        <h1>{{ config('app.title') }}</h1>
        <p>Façonnez l'avenir avec notre technologie de pointe. Plongez dans un monde où l'innovation rencontre l'imagination.</p>
        <form action="{{ route('auth') }}" class="auth-form" method="POST">
          @csrf
          <div class="form-group">
            <input type="email" name="email" id="email" placeholder="Saisissez votre adresse email" required>
            <button type="submit" class="cta-button">Continuer</button>
          </div>
        </form>
      </div>
    </section>

    <section id="features" class="features">
      <div class="container">
        <h2>Fonctionnalités</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-icon">🚀</div>
            <h3>Déploiement rapide</h3>
            <p>Lancez vos applications en quelques minutes, pas en jours.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🛡️</div>
            <h3>Sécurité avancée</h3>
            <p>Protection de pointe pour vos données et applications.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">📊</div>
            <h3>Analyse en temps réel</h3>
            <p>Surveillez et optimisez vos performances en direct.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="pricing">
      <div class="container">
        <h2>Tarifs</h2>
        <div class="pricing-grid">
          <div class="pricing-item">
            <h3>Débutant</h3>
            <div class="price">19€/mois</div>
            <ul>
              <li>5 applications</li>
              <li>10 Go de stockage</li>
              <li>Support par email</li>
            </ul>
            <a href="#" class="cta-button">Choisir</a>
          </div>
          <div class="pricing-item">
            <h3>Pro</h3>
            <div class="price">49€/mois</div>
            <ul>
              <li>Illimité applications</li>
              <li>100 Go de stockage</li>
              <li>Support prioritaire</li>
            </ul>
            <a href="#" class="cta-button">Choisir</a>
          </div>
          <div class="pricing-item">
            <h3>Entreprise</h3>
            <div class="price">Sur devis</div>
            <ul>
              <li>Solutions personnalisées</li>
              <li>Stockage illimité</li>
              <li>Support dédié 24/7</li>
            </ul>
            <a href="#" class="cta-button">Contacter</a>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="testimonials">
      <div class="container">
        <h2>Témoignages</h2>
        <div class="testimonial-grid">
          <div class="testimonial-item">
            <p class="testimonial-content">"NexusTech a transformé notre façon de développer et déployer des applications. C'est un vrai game-changer!"</p>
            <p class="testimonial-author">- Marie Dubois, CTO de TechInno</p>
          </div>
          <div class="testimonial-item">
            <p class="testimonial-content">"La simplicité et la puissance de cette plateforme nous ont permis de réduire nos délais de mise sur le marché de 50%."</p>
            <p class="testimonial-author">- Pierre Martin, Fondateur de StartupX</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2023 NexusTech. Tous droits réservés.</p>
    </div>
  </footer>
</x-base-layout>
