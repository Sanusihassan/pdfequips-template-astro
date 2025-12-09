import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === "production";
export default defineConfig({
    vite: {
      optimizeDeps: {
          include: ['react-dropzone'],
      },

      ssr: {
          noExternal: ['react-dropzone', 'react-icons']
      },

      plugins: [tailwindcss()],
    },
    integrations: [react()],
    base: isProd ? "/merge-pdf" : "/",
});