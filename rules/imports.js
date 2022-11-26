module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: ['import'],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc',
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
        'pathGroupsExcludedImportTypes': ['builtins'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          {
            group: ['../*'],
            message: 'Usage of relative parent imports is discouraged.',
          },
        ],
      },
    ],
  },
  settings: {
    'import/ignore': ['node_modules'],
  },
};
