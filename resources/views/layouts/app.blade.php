@props([
    'title'
])

<x-base-layout :$title :assets="['src/app.css', 'src/app.ts']">
    <div id="app" {{ $attributes }}>
    {{ $slot }}
    </div>
</x-base-layout>
