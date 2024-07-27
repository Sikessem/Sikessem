<?php
use function Laravel\Folio\name;

name('home');
?>
@section('head')
    @vite(['resources/design/home.css', 'resources/design/home.js'])
@endsection
<x-base-layout noApp>
  <div class="hero">
    <div class="grid"></div>
    <div class="orb-container">
      <div class="orb main-orb"></div>
    </div>
    <div class="content">
      <h1>{{ config('app.title') }}</h1>
      <p>Façonnez l'avenir avec notre technologie de pointe. Plongez dans un monde où l'innovation rencontre l'imagination.</p>
      <a href="#" class="cta-button">Explorez l'avenir</a>
    </div>
  </div>
</x-base-layout>
