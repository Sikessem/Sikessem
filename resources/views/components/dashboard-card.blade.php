@props([
    'title',
    'icon',
    'footer',
])
<div {{ $attributes->class('dashboard-card') }}>
    <div class="card-header">
        @isset($title)
        <h3 class="card-title">
            {{ $title }}
        </h3>
        @endisset
        @isset($icon)
        <span class="card-icon">
        {{ $icon }}
        </span>
        @endisset
    </div>

    <div class="card-content">
    {!! $slot !!}
    </div>

    @isset($footer)
    <div class="card-footer">
        {{ $footer }}
    </div>
    @endisset
</div>
