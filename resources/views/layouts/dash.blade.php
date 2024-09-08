@props([
    'title' => 'Dashboard',
])

@php
$user = auth()->user();
@endphp

<x-app-layout :$title :assets="['src/app.css', 'src/dash.js']" class="dash">
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

        {!! $slot !!}
    </div>
</x-app-layout>
