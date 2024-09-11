import tailwind from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    laravel({
      ssr: 'src/ssr.js',
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
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    tailwind(),
  ],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
});
