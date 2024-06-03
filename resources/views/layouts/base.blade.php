@props([
    'title'
])
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <base href="{{ config('app.url') }}"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">

        <title>@hasSection('title') @yield('title') @elseif(isset($title)) {{ $title }} @else {{ config('app.title', 'Sikessem') }} @endif</title>

        @vite(['resources/design/app.scss', 'resources/design/app.ts'])
        @livewireStyles
    </head>
    <body {{ $attributes->class('font-sans antialiased text-black dark:text-white bg-indigo-50 dark:bg-indigo-950 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950') }}>
        {!! $slot !!}
        @livewireScripts
    </body>
</html>
