import tailwind from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    laravel({
      ssr: 'src/ssr.ts',
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
    vueJsx(),
    vueDevTools({
      launchEditor: 'vim',
    }),
    tailwind(),
  ],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  optimizeDeps: {
    entries: ['./src/**/*.vue'],
  },
});
