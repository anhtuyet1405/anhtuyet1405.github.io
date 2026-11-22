import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' && !process.env.GITHUB_REPOSITORY?.endsWith('.github.io') ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Nheo'}/` : '/',
  plugins: [react()],
})
