module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "script"
  },
  env: {
    es6: true
  },
  rules: {
    "prefer-const": ["error", {destructuring: "all", ignoreReadBeforeAssign: false}],
    "no-var": "error"
  }
};
