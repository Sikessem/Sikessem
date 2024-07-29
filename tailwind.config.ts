import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import styliz from 'styliz';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './resources/views/**/*',
    './storage/framework/views/*.php',
    './app/View/**/*',
  ],

  plugins: [forms, typography, styliz],
};
