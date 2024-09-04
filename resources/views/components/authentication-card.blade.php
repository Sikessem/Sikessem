@props([
    'title' => __('Authentication')
])

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
