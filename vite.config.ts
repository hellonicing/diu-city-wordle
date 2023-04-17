import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify } from "unocss";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    UnoCSS({
      presets: [presetUno(), presetAttributify()],
    }),
  ],
});
