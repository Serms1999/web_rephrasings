import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv';
import path from 'path';

// @ts-ignore
dotenv.config({path: path.resolve(__dirname, '../.env')});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // @ts-ignore
    port: process.env.DEV_PORT ?? 5173
  },
  build: {
    target: ['es2022', 'chrome89', 'edge89', 'safari15', 'firefox89']
  },
  preview: {
    host: true,
    // @ts-ignore
    port: process.env.CLIENT_PORT ?? 4173
  }
})
