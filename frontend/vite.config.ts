import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss(),],
  base: command === 'build' ? '/AlgoTrading/' : '/', // Use /AlgoTrading/ for GitHub Pages, / for dev
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
