module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'linebreak-style': 0,
    'import/no-unresolved': 0,
  },
  plugins: ['import'],
};
