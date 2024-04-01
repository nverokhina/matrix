/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    react(),
    eslint(),
  ],
  server: {
    port: 3000,
  },
  base: '/matrix/',
});
