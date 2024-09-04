@props([
    'title',
    'noApp' => false,
])
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <base href="{{ config('app.url') }}"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta name="author" content="{{ config('app.author', 'Sigui Kessé Emmanuel') }}">

        <title>@hasSection('title') @yield('title') @elseif(isset($title)) {{ $title }} @else {{ config('app.title', 'Sikessem') }} @endif</title>

        @vite('src/preloader.ts')
        @if (!$noApp)
        @vite(['src/styles/app.css', 'src/app.ts'])
        @endif
        @livewireStyles
        @yield('head')
    </head>
    <body {{ $attributes->class('font-sans antialiased text-black dark:text-white bg-indigo-50 dark:bg-indigo-950 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950') }}>
        <div id="preloader"></div>
        {!! $slot !!}
        @livewireScripts
    </body>
</html>
