import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*"],
        maximumFileSizeToCacheInBytes: 5000000
      },
      includeAssets: [
          "**/*",
      ],
    })
  ],
  build: {
    chunkSizeWarningLimit: 2000, // handle warning on vendor.js bundle size
  },
});
