import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://atechenergy.eu',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
