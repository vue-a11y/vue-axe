import buble from '@rollup/plugin-buble'
import commonJs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import chokidar from 'chokidar'
import { eslint } from 'rollup-plugin-eslint'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    resolve(),
    commonJs(),
    eslint({
      include: './src/**'
    }),
    buble({
      objectAssign: true
    }),
    vue()
  ],
  output: [
    {
      name: 'VueAxe',
      file: 'demo/vue-axe.js',
      format: 'umd',
      exports: 'named',
      globals: {
        'axe-core': 'axeCore'
      }
    }
  ]
}
