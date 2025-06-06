import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      exportAs: 'ReactComponent' // Ключевая настройка
    })
  ],
  server: {
    port: 3000,
    open: true,
  },
})
