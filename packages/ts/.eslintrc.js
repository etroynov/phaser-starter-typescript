module.exports = {
  extends: ['airbnb-base'],

  env: {
    browser: true,
    es6: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
};
