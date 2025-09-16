import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/cathzer-portfolio/",
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    base: "/cathzer-portfolio/",
  }
})
