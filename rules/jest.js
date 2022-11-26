module.exports = {
  overrides: [
    {
      env: {
        jest: true,
      },
      extends: [
        'plugin:jest/recommended',
        'plugin:testing-library/react',
      ],
      files: ['*.test.ts'],
      plugins: [
        'jest',
        'testing-library',
      ],
      rules: {
        'jest/consistent-test-it': 'error',
        'jest/no-duplicate-hooks': 'warn',
        'jest/prefer-expect-assertions': [
          'warn',
          {
            onlyFunctionsWithAsyncKeyword: true,
          },
        ],
        'jest/prefer-todo': 'warn',
        'jest/require-top-level-describe': 'warn',
      },
    },
  ],
};
