module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    '@rushstack/eslint-config/profile/web-app',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: { tsconfigRootDir: __dirname },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    // 'import/order': [
    //   'error',
    //   {
    //     groups: [
    //       ['builtin', 'external', 'internal'],
    //       'parent',
    //       'sibling',
    //       'index',
    //       'type',
    //     ],
    //     alphabetize: { order: 'asc', caseInsensitive: true },
    //   },
    // ],
  },
};
