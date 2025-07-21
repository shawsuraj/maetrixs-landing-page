import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeFileSync } from "fs";

// Write CNAME to dist before deploy
writeFileSync("dist/CNAME", "www.maetrixs.com");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/maetrixs-landing-page/", // ← Required for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
