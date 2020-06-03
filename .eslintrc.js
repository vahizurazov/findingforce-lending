module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:gridsome/recommended',
    'prettier',
    'prettier/vue',
    'prettier/standard'
    // 'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],
  plugins: ['vue', 'gridsome', 'prettier', 'standard'],
  rules: {
    // 'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    // 'prettier/prettier': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
