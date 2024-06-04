import fs from "node:fs";
export { defineConfig as vite, mergeConfig, mergeAlias } from "vite";
export { default as laravel } from "laravel-vite-plugin";

import type {
  ConfigEnv as ViteConfigEnv,
  Plugin as VitePlugin,
  UserConfig as ViteUserConfig,
} from "vite";

export type ViteConfig = ViteUserConfig;
export type VitePlugins = VitePlugin[];

export interface LaravelConfig {
  /**
   * The path or paths of the entry points to compile.
   */
  input: string | string[];

  /**
   * Laravel's public directory.
   *
   * @default 'public'
   */
  publicDirectory?: string;

  /**
   * The public subdirectory where compiled assets should be written.
   *
   * @default 'build'
   */
  buildDirectory?: string;

  /**
   * The path to the "hot" file.
   *
   * @default `${publicDirectory}/hot`
   */
  hotFile?: string;

  /**
   * The path of the SSR entry point.
   */
  ssr?: string | string[];

  /**
   * The directory where the SSR bundle should be written.
   *
   * @default 'bootstrap/ssr'
   */
  ssrOutputDirectory?: string;

  /**
   * Configuration for performing full page refresh on blade (or other) file changes.
   *
   * {@link https://github.com/ElMassimo/vite-plugin-full-reload}
   * @default false
   */
  refresh?: boolean | string | string[] | RefreshConfig | RefreshConfig[];

  /**
   * Utilise the Herd or Valet TLS certificates.
   *
   * @default null
   */
  detectTls?: string | boolean | null;

  /**
   * Utilise the Herd or Valet TLS certificates.
   *
   * @default null
   * @deprecated use "detectTls" instead
   */
  valetTls?: string | boolean | null;

  /**
   * Transform the code while serving.
   */
  transformOnServe?: (code: string, url: DevServerUrl) => string;
}

export interface RefreshConfig {
  paths: string[];
}

export interface LaravelPlugin extends VitePlugin {
  config: (config: ViteUserConfig, env: ViteConfigEnv) => ViteUserConfig;
}

export type DevServerUrl = `${"http" | "https"}://${string}:${number}`;

export const refreshPaths = [
  "app/Livewire/**",
  "app/View/Components/**",
  "lang/**",
  "resources/lang/**",
  "resources/views/**",
  "routes/**",
].filter((path) => fs.existsSync(path.replace(/\*\*$/, "")));

export const mainLaravelConfig: LaravelConfig = {
  input: [],
  refresh: true,
};

export const mainViteConfig: ViteConfig = {
  resolve: {
    alias: {
      "@assets": "/resources/assets",
    },
  },
};

export function mergeInput(
  input: string | string[],
  others: string[],
): string[] {
  return Array.isArray(input) ? [...input, ...others] : [input, ...others];
}
