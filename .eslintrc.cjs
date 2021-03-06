module.exports = {
  extends: 'airbnb-base',
  rules: {
    "strict": 0,
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
    'no-else-return': ['error', { allowElseIf: true }],
    'prefer-promise-reject-errors': 0,
    'consistent-return': 0,
    'no-unused-vars': 1,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'no-await-in-loop': 0,
    "camelcase": 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'no-console': 0,
    'import/extensions': 0,
    'import/no-import-module-exports': 0,
    'no-return-await': 0,
    'guard-for-in': 0,
  },
};
