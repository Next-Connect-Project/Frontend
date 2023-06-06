import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from "dns";

// https://vitejs.dev/config/
dns.setDefaultResultOrder("verbatim");
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        //#1. axios라이브러리 등으로 http 요청인데 api로 시작하면,
        target:
          "http://www.nextconnect.shop", //#2. 이쪽 주소로 매핑하여 백그라운드로 보내라.
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
