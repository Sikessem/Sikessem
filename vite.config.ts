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
          'src/styles/app.css',
          'src/app.ts',
          'src/styles/auth.css',
          'src/auth.js',
          'src/styles/home.css',
          'src/home.js',
          'src/preloader.ts',
          'src/styles/preloader.css',
        ]),
      }),
      tailwind(),
    ],
  }),
);
