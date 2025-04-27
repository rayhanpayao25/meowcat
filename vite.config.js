import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add this to properly handle static assets
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg"],
  // Make sure Vite serves the assets correctly
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
})
