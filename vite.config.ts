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
          'src/app.css',
          'src/app.ts',
          'src/auth.css',
          'src/auth.js',
          'src/home.css',
          'src/home.js',
          'src/preloader.ts',
          'src/preloader.css',
        ]),
      }),
      tailwind(),
    ],
  }),
);
