import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   '/oauth2.0':{
    //     target: 'https://nid.naver.com',
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true
    //   }
    // }
  }
})
