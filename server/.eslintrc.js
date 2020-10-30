module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: [
    'simple-import-sort',
  ],
  rules: {
    // Imports sorting
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',

    // Imports
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    // Allow to reassign properties
    'no-param-reassign': 'off',

    // Default case in switch
    'default-case': 'off',

    // Require consistent return
    'consistent-return': 'off',
    'no-useless-return': 'off',

    // Max length of the line
    'max-len': ['error', { code: 120 }],

    // Allow to use return in the else block
    'no-else-return': ['error', { allowElseIf: true }],

    // Allow unused expressions
    'no-unused-expressions': 'off',

    'no-console': 'off',
    'no-underscore-dangle': 'off',
  },
};
