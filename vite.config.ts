import tailwind from '@tailwindcss/vite';
import {
  laravel,
  laravelConfig,
  mergeConfig,
  mergeInput,
  vite,
  viteConfig,
} from './sikessem.config';

export default vite(
  mergeConfig(viteConfig, {
    plugins: [
      laravel({
        ...laravelConfig,
        input: mergeInput(laravelConfig.input, [
          'resources/design/styles/app.css',
          'resources/design/scripts/app.ts',
          'resources/design/styles/auth.css',
          'resources/design/scripts/auth.js',
          'resources/design/styles/home.css',
          'resources/design/scripts/home.js',
          'resources/design/scripts/preloader.ts',
        ]),
      }),
      tailwind(),
    ],
  }),
);
