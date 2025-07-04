import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/projetoCiem/", // 👈 importante! use o nome do seu repositório GitHub aqui
});
