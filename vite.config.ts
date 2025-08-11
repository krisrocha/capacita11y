import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  //base: '/capacita11y/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
