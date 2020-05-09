import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  external: ['axe-core'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    vue(),
    buble({
      objectAssign: true
    }),
    terser()
  ],
  output: {
    name: 'VueAxe',
    exports: 'named',
    globals: {
      'axe-core': 'axeCore'
    }
  }
}
