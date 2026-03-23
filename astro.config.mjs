import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mdsahil.me',
  base: '/',
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

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {

        if (item.url.includes('/index')) {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/projects/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/experience/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/skills/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }


        item.img = [{
          url: 'https://mdsahil.me/favicon/favicon.ico',
          title: 'Mohammad Sahil Logo',
          caption: 'Site favicon'
        }];
        return item;
      },
    }),
  ],
});