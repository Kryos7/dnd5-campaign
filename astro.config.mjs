// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});