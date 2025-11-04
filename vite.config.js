import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/getmovies': 'http://localhost:5000',
      '/movie': 'http://localhost:5000',
    },
  },
})