module.exports = {
  plugins: [
    "react"
  ],
  extends: "plugin:react/recommended",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off"
  }
};
