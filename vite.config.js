import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform (code, id) {
        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return await transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic'
        })
      }
    },
    react()
  ],
  resolve: {
    alias: [
      { find: '@test-helpers', replacement: resolve(__dirname, './test-helpers') },
      { find: '@store', replacement: resolve(__dirname, './src/store') }
    ]
  },
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
