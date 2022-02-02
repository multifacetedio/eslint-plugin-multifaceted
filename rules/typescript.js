const path = require('path');

module.exports = {
  ignorePatterns: ['*.d.ts'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        '@typescript-eslint/no-shadow': 'error',
        'no-shadow': 'off',
        'react/prop-types': 'off',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: [path.resolve(process.cwd(), 'tsconfig.json')],
          },
        },
      },
    },
  ],
};
