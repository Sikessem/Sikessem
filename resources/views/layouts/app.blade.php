@props([
    'title'
])

<x-base-layout :$title :assets="['src/app.css', 'src/app.ts']" {{ $attributes }}>
    {{ $slot }}
</x-base-layout>
