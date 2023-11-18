import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@atoms": path.resolve(__dirname, "./src/ui/atoms"),
      "@molecules": path.resolve(__dirname, "./src/ui/molecules"),
      "@organisms": path.resolve(__dirname, "./src/ui/organisms"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
