import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', // Или postcss.config.js, в зависимости от формата
  },
});
