import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@screens": path.resolve(__dirname, "./src/screens"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@state": path.resolve(__dirname, "./src/state"),
      "@data": path.resolve(__dirname, "./src/_data"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
