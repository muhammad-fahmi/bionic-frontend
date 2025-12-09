import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


// https://vite.dev/config/
export default defineConfig({
  base:'/bionic-frontend',
  plugins: [react({
    babel: {
      plugins: ['babel-plugin-react-compiler'],
    },
  })],
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
