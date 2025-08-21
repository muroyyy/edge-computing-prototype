import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/edge-computing-prototype/', // 👈 IMPORTANT for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // default, but explicit for clarity
    sourcemap: true // helpful for debugging production issuess
  }
});