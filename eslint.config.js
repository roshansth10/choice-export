const js = require('@eslint/js')

module.exports = [
  {
    ignores: ['.next', 'dist'],
  },
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },
]