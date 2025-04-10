import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Tambahkan ini untuk memungkinkan akses dari luar
    port: 9778,
    open: true
  }
});