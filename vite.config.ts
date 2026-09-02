import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: process.env.VITE_BASE_PATH ?? '/',

  server: {
    host: '0.0.0.0',
    allowedHosts: ['shipyard.test'],
  },

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',

    include: ['src/**/*.test.{ts,tsx}'],
  },
})


