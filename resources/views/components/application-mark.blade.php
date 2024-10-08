@props([
    'width' => null,
    'height' => null,
    'size' => '64',
    'color' => '#7b7bff',
    'stroke' => '1',
    'opacity' => '1',
])

<x-application-logo :$width :height :$size :$color :$stroke :$opacity>
{!! $slot !!}
</x-application-logo>
