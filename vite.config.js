import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('firebase/app') || id.includes('firebase/auth')) {
              return 'vendor-firebase-core';
            }
            if (id.includes('firebase/firestore') || id.includes('firebase/storage')) {
              return 'vendor-firebase-db';
            }
            return 'vendor-misc';
          }
        }
      }
    }
  }
});
