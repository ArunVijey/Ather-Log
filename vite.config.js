import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base must match the GitHub repo name for GitHub Pages
export default defineConfig({
  base: "/ather-log/",
  plugins: [react(), tailwindcss()],
});
