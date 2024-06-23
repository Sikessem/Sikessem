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
          'resources/design/app.scss',
          'resources/design/app.ts',
        ]),
      }),
    ],
  }),
);
