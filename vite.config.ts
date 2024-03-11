import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '127.0.0.1',
    port: 10000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:10100/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
