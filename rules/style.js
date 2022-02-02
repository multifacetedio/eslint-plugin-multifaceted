module.exports = {
  rules: {
    // layout/formatting https://eslint.org/docs/rules/#suggestions
    'array-bracket-newline': [
      'error',
      {
        minItems: 3,
        multiline: true,
      },
    ],
    'array-bracket-spacing': 'error',
    'array-element-newline': [
      'error',
      {
        minItems: 3,
        multiline: true,
      },
    ],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'indent': ['error', 2],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-extra-parens': [
      'error',
      'all',
      {
        enforceForArrowConditionals: false,
        ignoreJSX: 'all',
        returnAssign: false,
      },
    ],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 1,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
      },
    ],
    'object-property-newline': 'error',
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'],
    'rest-spread-spacing': ['error', 'never'],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        words: true,
      },
    ],
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
  },
};
