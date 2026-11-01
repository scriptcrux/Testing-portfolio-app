import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite server config
  server: {
    host: true,
  },
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
