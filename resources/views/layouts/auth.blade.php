@props([
    'title' => __('Authentication')
])
@section('head')
@vite(['src/styles/auth.css', 'src/auth.js'])
@endsection
<x-base-layout :$title noApp>
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

    <x-authentication-card :$title>
        {!! $slot !!}
    </x-authentication-card>
</x-base-layout>
