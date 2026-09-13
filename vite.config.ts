import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["@heroicons/react", "react-icons", "lucide-react"],
          ui: ["@material-tailwind/react"],
          utils: ["@studio-freight/lenis", "embla-carousel-react"],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1600,
    // Enable source maps for better debugging in production
    sourcemap: false,
  },
  // Optimize asset handling
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
    "**/*.webp",
  ],
  server: {},
  // Enable experimental features for better performance
  experimental: {
    renderBuiltUrl(filename: string) {
      return "/" + filename;
    },
  },
});
