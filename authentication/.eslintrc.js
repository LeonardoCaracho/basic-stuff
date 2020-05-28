module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugins:@typescript-eslint/recommended',
    'standard',
	'prettier/@typescript-eslint',
	"plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    "indent": ["error", 4]
  }
}
