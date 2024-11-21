import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/math'],
      // dirs: ['./src/composables/**/*', './src/utils'],
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dirs: ['./src/composables/**/*'],
      dts: './imports.d.ts',
    }),
    Components({
      dts: true,
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
