import html from "@rollup/plugin-html";
import { glob } from "glob";
import {
  type LaravelConfig,
  type ViteConfig,
  type VitePlugins,
  laravel,
  mainLaravelConfig,
  mainViteConfig,
  mergeConfig,
  mergeInput,
  vite,
} from "./sikessem.config";

/**
 * Get Files from a directory
 */
function GetFilesArray(query: string): string[] {
  return glob.sync(query);
}
/**
 * Js Files
 */
// Page JS Files
const pageJsFiles = GetFilesArray("resources/assets/js/*.js");

// Processing Vendor JS Files
const vendorJsFiles = GetFilesArray("resources/assets/vendor/js/*.js");

// Processing Libs JS Files
const LibsJsFiles = GetFilesArray("resources/assets/vendor/libs/**/*.js");

/**
 * Scss Files
 */
// Processing Core, Themes & Pages Scss Files
const CoreScssFiles = GetFilesArray(
  "resources/assets/vendor/scss/**/!(_)*.scss",
);

// Processing Libs Scss & Css Files
const LibsScssFiles = GetFilesArray(
  "resources/assets/vendor/libs/**/!(_)*.scss",
);
const LibsCssFiles = GetFilesArray("resources/assets/vendor/libs/**/*.css");

// Processing Fonts Scss Files
const FontsScssFiles = GetFilesArray(
  "resources/assets/vendor/fonts/!(_)*.scss",
);

// Processing Window Assignment for Libs like jKanban, pdfMake
function libsWindowAssignment() {
  return {
    name: "libsWindowAssignment",

    transform(src: string, id: string) {
      if (id.includes("jkanban.js")) {
        return src.replace("this.jKanban", "window.jKanban");
      }
      if (id.includes("vfs_fonts")) {
        return src.replace(/this\.pdfMake/g, "window.pdfMake");
      }
    },
  };
}

export const laravelConfig: LaravelConfig = {
  ...mainLaravelConfig,
  input: mergeInput(mainLaravelConfig.input, [
    "resources/assets/css/demo.css",
    "resources/js/app.js",
    ...pageJsFiles,
    ...vendorJsFiles,
    ...LibsJsFiles,
    "resources/js/laravel-user-management.js", // Processing Laravel User Management CRUD JS File
    ...CoreScssFiles,
    ...LibsScssFiles,
    ...LibsCssFiles,
    ...FontsScssFiles,
  ]),
};

export const plugins: VitePlugins = [
  laravel(laravelConfig),
  html(),
  libsWindowAssignment(),
];

export const viteConfig: ViteConfig = mergeConfig(mainViteConfig, {
  plugins,
});

export default vite(viteConfig);
