/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  plugins: ['sort-keys-fix'],
  extends: ['eslint:recommended'],
  rules: {
    // possible problems https://eslint.org/docs/rules/#possible-problems
    'array-callback-return': 'error',
    'no-duplicate-imports': 'error',

    // suggestions https://eslint.org/docs/rules/#suggestions
    'arrow-body-style': 'error',
    'camelcase': 'error',
    'curly': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'func-name-matching': 'error',
    'grouped-accessor-pairs': 'error',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-confusing-arrow': 'error',
    'no-extra-bind': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-new-object': 'error',
    'no-param-reassign': 'error',
    'no-shadow': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never',
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': [
      'error',
      'consistent-as-needed',
    ],
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': [
      'warn',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'sort-vars': 'warn',
    'spaced-comment': 'error',
  },
};
