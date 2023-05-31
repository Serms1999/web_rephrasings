import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv';
import path from 'path';

// @ts-ignore
dotenv.config({path: path.resolve(__dirname, 'src/config/.env')});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // @ts-ignore
    port: process.env.CLIENT_PORT || 3000
  }
})
