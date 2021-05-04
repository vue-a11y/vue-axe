import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ isProduction: true })
  ],
  build: {
    lib: {
      entry: './src',
      name: 'VueAxe'
    },
    rollupOptions: {
      external: ['vue', 'axe-core'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'axe-core': 'axeCore'
        }
      }
    }
  }
})
