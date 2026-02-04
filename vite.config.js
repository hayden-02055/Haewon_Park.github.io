import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Haewon_Park.github.io/',
  build: {
    outDir: 'dist',
  },
})
