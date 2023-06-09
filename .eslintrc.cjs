module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
      "plugin:react/recommended",
      "airbnb",
      "plugin:storybook/recommended",
      "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    "semi": ["error", "never"],
    "max-len": ["warn", {
      "code": 120
    }],
    "prettier/prettier": ["warn", {
      "semi": false,
      "tabWidth": 4,
      'endOfLine': 'auto'
    }],
    "jsx-a11y/no-noninteractive-tabindex": "off"
  }
};
