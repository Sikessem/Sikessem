@props([
    'title' => __('Authentication')
])

<div class="auth-card">
    <div class="auth-wrapper">
        <h1 class="flex flex-col">
            <a href="/" wire:navigate.hover>
                <x-application-mark width="48" height="48" />
            </a>
            <span>
                {{ $title }}
            </span>
        </h1>
        {!! $slot !!}
    </div>
</div>
