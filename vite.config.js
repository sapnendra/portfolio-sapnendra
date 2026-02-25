import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Minify with terser for smaller bundles
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true, // Fix Safari 10 bug
      },
    },
    // Warn when an individual chunk exceeds 500 kB
    chunkSizeWarningLimit: 500,
    // Chunk splitting for better long-term caching
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "gsap-vendor": ["gsap", "@gsap/react"],
          animation: ["lenis"],
        },
      },
    },
    // No source maps in production (smaller assets)
    sourcemap: false,
    // Target modern browsers for smaller bundle size
    target: "esnext",
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Inline assets smaller than 4kb
    assetsInlineLimit: 4096,
  },
  // Performance optimizations
  server: {
    host: true,
  },
  preview: {
    host: true,
  },
});
