module.exports = {
  root: true,
  env: {
    "cypress/globals": true,
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: [
    "cypress"
  ],
  // add your custom rules here
  rules: {},
  globals: {}
}
