<button {{ $attributes->merge(['type' => 'submit', 'class' => 'inline-flex items-center px-4 py-2 bg-indigo-800 dark:bg-indigo-200 border border-transparent rounded-md font-semibold text-xs text-indigo-50 dark:text-indigo-950 uppercase tracking-widest hover:bg-indigo-700 dark:hover:bg-indigo-300 focus:bg-indigo-700 dark:focus:bg-indigo-300 active:bg-indigo-800 dark:active:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-50 dark:focus:ring-offset-indigo-950 transition ease-in-out duration-150']) }}>
    {{ $slot }}
</button>
