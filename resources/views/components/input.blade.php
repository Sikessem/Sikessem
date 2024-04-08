@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950 text-indigo-950 dark:text-indigo-50 bg-gradient-to-tr from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 focus:border-indigo-400 dark:focus:border-indigo-600 focus:ring-indigo-400 dark:focus:ring-indigo-600 rounded-md shadow-sm']) !!}>
