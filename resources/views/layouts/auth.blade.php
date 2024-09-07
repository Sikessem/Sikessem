@props([
    'title' => __('Authentication')
])

<x-app-layout :$title :assets="['src/app.css', 'src/auth.js']" {{ $attributes->class('auth') }}>
    <div class="particles"></div>
    <div class="grid"></div>

    <div class="orbs">
        <div id="orb1" class="orb"></div>
        <div id="orb2" class="orb"></div>
    </div>

    <x-validation-errors class="mb-4" />

    @session('status')
        <div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            {{ $value }}
        </div>
    @endsession

    <x-auth-card :$title>
        {!! $slot !!}
    </x-auth-card>
</x-app-layout>
