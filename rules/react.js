module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/default-props-match-prop-types': 'error',
    'react/forbid-component-props': [
      'error',
      {
        forbid: ['style'],
      },
    ],
    'react/forbid-dom-props': [
      'error',
      {
        forbid: ['style'],
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      'never',
    ],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'forbid',
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        children: true,
        when: 'never',
      },
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline',
    ],
    'react/jsx-fragments': [
      'error',
      'syntax',
    ],
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-tag-spacing': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: 'parens-new-line',
        assignment: 'parens-new-line',
        condition: 'parens-new-line',
        declaration: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
        return: 'parens-new-line',
      },
    ],
    'react/no-array-index-key': 'error',
    'react/no-danger': 'warn',
    'react/no-invalid-html-attribute': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unstable-nested-components': 'warn',
    'react/no-unused-prop-types': 'error',
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
