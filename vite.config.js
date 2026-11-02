import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  },
  preview: {
    port: 4173,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('@emailjs')) {
              return 'vendor-emailjs';
            }
            // The whole Firebase SDK plus its transitive deps (idb,
            // protobufjs/grpc-web, websocket transport) loads on demand
            // after first paint — one chunk, so it never leaks into the
            // eager entry graph.
            if (
              id.includes('firebase') ||
              id.includes('idb') ||
              id.includes('protobuf') ||
              id.includes('@grpc') ||
              id.includes('/long/') ||
              id.includes('websocket') ||
              id.includes('http-parser') ||
              id.includes('re2js')
            ) {
              return 'vendor-firebase';
            }
            return 'vendor-misc';
          }
        }
      }
    }
  }
});
