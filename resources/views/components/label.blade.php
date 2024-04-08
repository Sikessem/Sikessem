@props(['value'])

<label {{ $attributes->merge(['class' => 'block font-medium text-sm text-indigo-950 dark:text-indigo-50']) }}>
    {{ $value ?? $slot }}
</label>
