import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Laskshmi-jewellery/',
  server: {
    proxy: {
      '/api': {
        target: 'https://srilakshmithangamaaligai.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
