import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import commonJs from 'rollup-plugin-commonjs'
import eslint from 'rollup-plugin-eslint'
import chokidar from 'chokidar'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    eslint({
      include: './src/**'
    }),
    babel({
      exclude: './node_modules/**'
    }),
    resolve(),
    commonJs(),
    VueLoader(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  output: [
    {
      name: 'VueAxe',
      file: 'demo/vue-axe.js',
      format: 'umd'
    }
  ]
}
