<button {{ $attributes->merge(['type' => 'submit', 'class' => 'button cta']) }}>
    {{ $slot }}
</button>
