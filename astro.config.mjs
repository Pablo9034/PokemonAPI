// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/pokemons/1'
  },

  image: {
    domains: ['pokeapi.co']
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [solidJs()]
});