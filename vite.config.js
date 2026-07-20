import { defineConfig } from "vite";

// Projeto estático (HTML/CSS/JS puro, sem framework).
// Os defaults do Vite já cobrem tudo que este projeto precisa:
// - index.html na raiz como entry point
// - pasta public/ servida como raiz estática (assets/img, assets/prints)
// - build para dist/ pronta para deploy na Vercel
export default defineConfig({
  build: {
    outDir: "dist",
  },
});
