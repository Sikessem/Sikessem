import {
  laravelConfig as appLaravelConfig,
  plugins as appPlugins,
} from "./app.config";
import {
  laravelConfig as dashLaravelConfig,
  plugins as dashPlugins,
} from "./dash.config";
import {
  laravel,
  mainLaravelConfig,
  mainViteConfig,
  mergeConfig,
  mergeInput,
  vite,
} from "./sikessem.config";

export default vite(
  mergeConfig(mainViteConfig, {
    plugins: [
      laravel({
        ...mainLaravelConfig,
        input: mergeInput(mainLaravelConfig.input, [
          ...appLaravelConfig.input,
          ...dashLaravelConfig.input,
        ]),
      }),
      ...appPlugins,
      ...dashPlugins,
    ],
  }),
);
