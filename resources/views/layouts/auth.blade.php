@props([
    'title' => 'Authentication'
])
@section('head')
@vite(['resources/design/styles/auth.css', 'resources/design/scripts/auth.js'])
@endsection
<x-base-layout :$title noApp>
    <div class="orbs">
        <div id="orb1" class="orb"></div>
        <div id="orb2" class="orb"></div>
    </div>

    <div class="auth-container">
        <div class="auth-content">
            <h1 class="flex flex-col">
                <div>
                    <x-authentication-card-logo width="48" height="48" />
                </div>
                <div>
                    {{ $title }}
                </div>
            </h1>
            {!! $slot !!}
        </div>
    </div>
</x-base-layout>
