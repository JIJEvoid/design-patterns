import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
const reg =/\.(js|ts|mjs|json|css|html|jpg|png)$/i

/** @type {import('vite').UserConfig} */
export default defineConfig({
  envDir:"env",
  plugins: [vue(),viteCompression({
    verbose:true,
    filter:reg
  })],
  build: {
    // 100kb以上警告
    chunkSizeWarningLimit:100,
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
