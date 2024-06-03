<x-base-layout>
    <x-banner />

    <div class="min-h-screen">
        @livewire('navigation-menu')

        @if (isset($header))
        <header class="bg-indigo-100 dark:bg-indigo-900 shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {{ $header }}
            </div>
        </header>
        @endif

        <main>
            {{ $slot }}
        </main>
    </div>

    @stack('modals')

</x-base-layout>
