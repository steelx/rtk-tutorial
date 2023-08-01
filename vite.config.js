import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./test-helpers/setupTestFramework.js'],
    testMatch: ['./src/**/*.test.tsx'],
    globals: true
  },
  server: {
    port: 3000,
  }
})
