import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ProductDetailsPage/',
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      '@components': '/src/components',
      '@styles': '/src/styles.ts',
      '@assets' : '/src/assets'
    },
  },
})
