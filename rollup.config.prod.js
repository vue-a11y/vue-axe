import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import VueLoader from 'rollup-plugin-vue'
import butternut from 'rollup-plugin-butternut'
import babel from 'rollup-plugin-babel'
import commonJs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: './node_modules/**'
    }),
    butternut(),
    resolve(),
    commonJs(),
    VueLoader(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: [
    {
      name: 'VueAxe',
      file: 'dist/vue-axe.js',
      format: 'umd'
    }
  ]
}
