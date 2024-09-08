@php
$user = auth()->user();
@endphp
<x-app-layout :assets="['src/app.css', 'src/dash.js']" title="Dashboard" class="dash">
  <div class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <div class="logo-container">
        <x-application-mark class="logo" color="#fff" />
        <span class="app-name">{{ config('app.title') }}</span>
      </div>
      <div class="sidebar-toggle" id="sidebarToggle">←</div>
    </div>
    <nav class="sidebar-menu">
      <a href="{{ route('dashboard') }}#" class="active"><span class="menu-icon">📊</span><span class="menu-text">Vue d'ensemble</span></a>
      <a href="{{ route('dashboard') }}#applications"><span class="menu-icon">🖥️</span><span class="menu-text">Applications</span></a>
      <a href="{{ route('dashboard') }}#databases"><span class="menu-icon">🗄️</span><span class="menu-text">Bases de données</span></a>
      <a href="{{ route('dashboard') }}#monitoring"><span class="menu-icon">📈</span><span class="menu-text">Monitoring</span></a>
      <a href="{{ route('dashboard') }}#logs"><span class="menu-icon">📝</span><span class="menu-text">Logs</span></a>
      <a href="{{ route('dashboard') }}#settings"><span class="menu-icon">⚙️</span><span class="menu-text">Paramètres</span></a>
    </nav>
  </div>

  <div class="main-content" id="mainContent">
    <header class="header">
      <div class="menu-toggle" id="menuToggle">☰</div>
      <div class="search-bar">
        <i>🔍</i>
        <input type="text" placeholder="Rechercher...">
      </div>
      <div class="user-profile" id="userProfile">
        <img src="{{ $user->profile_photo_url }}" alt="{{ $user->name }} profile photo">
        <div class="user-info">
          <span class="user-name">{{ $user->name }}</span>
          <span class="user-role">{{ $user->roles()->first()?->name ?: 'Member' }}</span>
        </div>
        <div class="user-dropdown" id="userDropdown">
          <a href="{{ route('profile.show') }}">Mon Profil</a>
          <a href="#settings">Paramètres</a>
          <a href="#logout">Déconnexion</a>
        </div>
      </div>
    </header>

    <div class="dashboard-grid">
      <div class="dashboard-card">
        <div class="card-header">
          <h3 class="card-title">Applications actives</h3>
          <span class="card-icon">🚀</span>
        </div>
        <div class="card-content">12</div>
        <div class="card-footer">
          <span class="trend-icon trend-up">▲</span>
          <span>+3 depuis hier</span>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h3 class="card-title">Bases de données</h3>
          <span class="card-icon">🗄️</span>
        </div>
        <div class="card-content">8</div>
        <div class="card-footer">
          <span class="trend-icon trend-up">▲</span>
          <span>+1 cette semaine</span>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h3 class="card-title">Utilisation CPU</h3>
          <span class="card-icon">💻</span>
        </div>
        <div class="card-content">67%</div>
        <div class="card-footer">
          <span class="trend-icon trend-down">▼</span>
          <span>-5% depuis hier</span>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h3 class="card-title">Utilisation mémoire</h3>
          <span class="card-icon">🧠</span>
        </div>
        <div class="card-content">4.2 GB</div>
        <div class="card-footer">
          <span class="trend-icon trend-up">▲</span>
          <span>+0.5 GB depuis hier</span>
        </div>
      </div>
    </div>

    <div class="dashboard-card" style="margin-top: 30px;">
      <div class="card-header">
        <h3 class="card-title">Performances des applications</h3>
      </div>
      <div class="chart-container" id="performanceChart"></div>
    </div>
  </div>
</x-app-layout>
