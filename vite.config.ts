import tailwind from '@tailwindcss/vite';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'src/app.css',
        'src/app.ts',
        'src/auth.js',
        'src/dash.js',
        'src/preloader.ts',
      ],
      refresh: [
        'src/**',
        'app/View/**',
        'lang/**',
        'resources/views/**',
        'routes/**',
        'storage/framework/views/*.php',
      ],
    }),
    tailwind(),
  ],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
});
