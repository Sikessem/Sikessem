@props([
    'title',
    'assets' => ['src/app.css', 'src/app.ts'],
])
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <base href="{{ config('app.url') }}"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
        <meta name="author" content="{{ config('app.author', 'Sigui Kessé Emmanuel') }}">

        <title>@hasSection('title') @yield('title') @elseif(isset($title)) {{ __($title) }} @else {{ config('app.title', 'Sikessem') }} @endif</title>

        @vite(['src/preloader.ts'])
        @livewireStyles
        @vite($assets)
        @yield('head')
    </head>
    <body>
        <div id="preloader"></div>
        <div id="app" {{ $attributes }}>
        {!! $slot !!}
        </div>
        @livewireScriptConfig
    </body>
</html>
