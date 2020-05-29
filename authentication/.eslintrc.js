module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'plugins:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    "plugin:prettier/recommended",
    'standard',
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
