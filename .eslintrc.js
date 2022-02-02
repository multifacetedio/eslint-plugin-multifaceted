module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    './rules/base',
    './rules/style',
  ],
  parserOptions: {
    ecmaVersion: '2020',
  },
  plugins: ['eslint-plugin'],
  root: true,
};
