@props([
    'title' => __('Authentication')
])

<div class="auth-card">
    <div class="auth-wrapper">
        <h1>
            <a href="/" wire:navigate.hover>
                <x-application-mark />
            </a>
            <span>
                {{ $title }}
            </span>
        </h1>

        <x-validation-errors class="mb-4" />

        {!! $slot !!}
    </div>
</div>
