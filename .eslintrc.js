module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'import/extensions': 'off',
    // 'prefer-destructuring': 'off',
    'no-useless-call': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
