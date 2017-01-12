module.exports = {
  plugins: [
    "react"
  ],
  extends: "plugin:react/recommended",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
 rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }  
};
