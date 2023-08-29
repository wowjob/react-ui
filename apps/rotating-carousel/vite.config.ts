/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/rotating-carousel',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'app/rotating-carousel/public/inc/fonts/**/*', // Assumes you want to copy all files. Adjust pattern as needed.
          dest: 'dist/rotating-carousel/inc/fonts',
        },
      ],
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: 'dist/rotating-carousel', // This is the default value. Update it if you want to change the entire build directory.
    assetsDir: 'inc/assets', // Setting your custom assets directory.
    rollupOptions: {
      output: {
        entryFileNames: `inc/assets/rotating-carousel.js`,
      },
    },
  },

  // test: {
  //   globals: true,
  //   cache: {
  //     dir: '../../node_modules/.vitest',
  //   },
  //   environment: 'jsdom',
  //   include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  // },
})
