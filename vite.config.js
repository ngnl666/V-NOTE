import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

process.env = { ...process.env };
export default defineConfig({
  plugins: [vue()],
  base: '/V-NOTE/',
  API_KEY: process.env.VITE_API_KEY,
  AUTH_DOMAIN: process.env.VITE_AUTH_DOMAIN,
  PROJECT_ID: process.env.VITE_PROJECT_ID,
  STORAGE_BUCKET: process.env.VITE_STORAGE_BUCKET,
  MESSAGING_SENDER_ID: process.env.VITE_MESSAGING_SENDER_ID,
  APP_ID: process.env.VITE_APP_ID,
  MEASUREMENT_ID: process.env.VITE_MEASUREMENT_ID,
  DEMO_EMAIL: process.env.VITE_DEMO_EMAIL,
  DEMO_PASSWORD: process.env.VITE_DEMO_PASSWORD,
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src'),
      },
    ],
  },
});
