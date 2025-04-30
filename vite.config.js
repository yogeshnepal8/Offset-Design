import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  server: {
    host: true, // or '0.0.0.0'
    port: 5173, // optional, you can specify a port
  },
});
