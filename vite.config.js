import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
    ],
  }
})
