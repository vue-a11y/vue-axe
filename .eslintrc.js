module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'vuejs-accessibility'
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    'plugin:vuejs-accessibility/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off'
  }
}
