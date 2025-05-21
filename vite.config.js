import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Make sure this points exactly to ./src
    },
  },
  console.log('Alias @ resolves to:', path.resolve(__dirname, './src'))
})
