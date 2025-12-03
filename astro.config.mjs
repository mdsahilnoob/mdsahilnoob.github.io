import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mdsahilnoob.github.io',
  base: '/my_portfolio',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
