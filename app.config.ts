import {
  type LaravelConfig,
  type Plugins,
  type ViteConfig,
  laravel,
  mainLaravelConfig,
  mainViteConfig,
  mergeConfig,
  mergeInput,
  vite,
} from "./sikessem.config";

export const laravelConfig: LaravelConfig = {
  ...mainLaravelConfig,
  input: mergeInput(mainLaravelConfig.input, [
    "resources/design/app.scss",
    "resources/design/app.ts",
  ]),
};

export const plugins: Plugins = [laravel(laravelConfig)];

export const viteConfig: ViteConfig = mergeConfig(mainViteConfig, {
  plugins,
});

export default vite(viteConfig);
