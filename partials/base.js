module.exports = {
  extends: "eslint:recommended",
  rules: {
    indent: ["error", 2, {SwitchCase: 1}],
    quotes: ["error", "double", {avoidEscape: true}],
    semi: ["error", "always"],
    strict: 0,
    eqeqeq: ["error", "smart"],
    "no-redeclare": ["error", {builtinGlobals: true}],
    "no-caller": "error",
    "no-console": "off",
    "comma-dangle": ["error", "never"]
  },
  globals: {
    Promise: true
  }
};
