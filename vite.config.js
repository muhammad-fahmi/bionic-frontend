import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: "dist",
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //         }
  //       }
  //     }
  //   }
  // },
  // assetsInclude: ['**/*.html'],
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
