import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@components": path.resolve(__dirname, "./client/src/components"),
    },
  },
  root: "./client",
  server: {
    port: 3000,
  },
  plugins: [react(), deno(), tailwindcss()],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
