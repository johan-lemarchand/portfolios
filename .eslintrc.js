module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'vuetify',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off',
    'indent': ['off'],
    "semi": 0,
    'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
