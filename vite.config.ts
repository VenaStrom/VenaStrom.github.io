import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: "src",
  publicDir: "../",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    copyPublicDir: false,
  },
  define: {
    "__BUILD_DATE__": JSON.stringify(new Date().toLocaleDateString()),
  },
}) satisfies UserConfig;