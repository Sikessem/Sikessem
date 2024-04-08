<x-base-layout class="flex justify-center items-center">
    <div class="relative max-w-max min-h-screen grid gap-8 grid-rows-[1fr_auto_1fr] selection:bg-[#7878ff] selection:text-white dark:selection:text-black">
        <header class="flex items-center p-8">
            <div class="inline-flex">
                <x-application-brand class="h-6 sm:h-8 lg:h-10"/>
            </div>
            @if (Route::has('login'))
            <nav class="flex flex-1 items-center justify-end">
                @auth
                <a href="{{ url('/dashboard') }}" class="rounded-md px-3 py-2 ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white" >
                    @lang('Tableau de bord')
                </a>
                @else
                @if (Route::has('login'))
                <a href="{{ route('login') }}" class="inline-flex rounded-md px-3 py-2 ring-1 ring-transparent transition uppercase text-xs sm:text-sm md:text-md lg:text-lg text-blue-500 underline-purple-500 hover:underline focus:outline-none focus-visible:ring-[#FF2D20] dark:focus-visible:ring-white" >
                    @lang('Se connecter')
                </a>
                @endif

                @if (Route::has('register'))
                <a href="{{ route('register') }}" class="inline-flex border-2 border-blue-500 hover:bg-blue-500 rounded-md px-3 py-2 ring-1 ring-transparent transition uppercase text-xs sm:text-sm md:text-md lg:text-lg text-blue-500 hover:text-white dark:hover:text-black focus:outline-none focus-visible:ring-[#FF2D20] dark:focus-visible:ring-white" >
                    @lang('S\'inscrire')
                </a>
                @endif
                @endauth
            </nav>
            @endif
        </header>

        <main class="flex flex-col justify-center items-center text-center px-6 space-y-2 sm:space-y-4 xl:space-y-8">
            <h1 class="font-black text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl">
                @lang('Le :network de la :next_generation', ['network' => '<span class="text-[#0078ff] selection:bg-[#0078ff]">'.__('réseau').'</span>', 'next_generation' => '<span class="text-[#7800ff] selection:bg-[#7800ff]">'.__('génération branchée').'</span>'])
            </h1>
            <p class="font-medium text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">
                @lang(':app est un réseau d\'échanges et de partage de contenus.', ['app' => config('app.title')])
            </p>
            <form method="post" action="/auth" class="flex flex-col mx-2 w-3/4 sm:w-2/3 md:w-3/4 lg:w-2/3 2xl:w-3/4">
                <div class="mt-2">
                    <x-input type="email" name="email" placeholder="Entrez votre adresse e-mail" class="inline-block text-center w-full px-4 py-2 md:px-6 md:py-3 border-blue-500 rounded outline-none"/>
                </div>
                <div class="text-md md:text-lg mt-3 inline-flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div class="inline-flex justify-center items-center">
                        <input type="checkbox" id="subscribe" name="subscribe" class="outline-none rounded"/>
                        <label for="subscribe" class="ml-1">
                            @lang('Rester à l\'écoute des nouveautés')
                        </label>
                    </div>
                    <button type="submit" class="flex-1 bg-purple-500 hover:bg-purple-400 active:bg-purple-600 dark:hover:bg-purple-600 dark:active:purple-400 inline-block w-full lg:w-auto rounded px-4 py-2 md:px-6 md:py-3">
                        @lang('Réjoindre')
                    </button>
                </div>
                @csrf
            </form>
        </main>

        <footer class="inline-flex items-center justify-center text-sm">
            <p>Copyright &copy; {{ config('app.title') }} {{ date('Y') }}</p>
        </footer>
    </div>
</x-base-layout>
