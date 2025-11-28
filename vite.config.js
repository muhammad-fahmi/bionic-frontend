import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
})
