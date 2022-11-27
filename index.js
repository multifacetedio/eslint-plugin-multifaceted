module.exports = {
  configs: {
    base: {
      extends: [
        './rules/base',
        './rules/imports',
        './rules/style',
      ],
    },
    jest: {
      extends: ['./rules/jest'],
    },
    react: {
      extends: [
        './rules/base',
        './rules/imports',
        './rules/style',
        './rules/react',
      ],
    },
    typescript: {
      extends: [
        './rules/base',
        './rules/imports',
        './rules/style',
        './rules/react',
        './rules/typescript',
      ],
    },
  },
};
