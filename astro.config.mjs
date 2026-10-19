// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Cambia esta URL por tu dominio final cuando publiques en Vercel
  site: 'https://cristianortiz.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false, // inglés en "/", español en "/es/"
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
