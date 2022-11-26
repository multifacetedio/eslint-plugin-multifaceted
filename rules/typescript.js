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
      plugins: [
        '@typescript-eslint',
        'import',
      ],
      rules: {
        '@typescript-eslint/no-extra-parens': [
          'error',
          'all',
          {
            conditionalAssign: false,
            enforceForArrowConditionals: false,
            ignoreJSX: 'multi-line',
            returnAssign: false,
          },
        ],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/semi': 'error',
        'no-extra-parens': 'off',
        'no-shadow': 'off',
        'no-useless-constructor': 'off',
        'react/prop-types': 'off',
        'semi': 'off',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': [
            '.ts',
            '.tsx',
          ],
        },
      },
    },
  ],
};
