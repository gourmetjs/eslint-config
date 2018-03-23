module.exports = {
  extends: "eslint:recommended",
  rules: {
    indent: ["error", 2, {SwitchCase: 1}],
    quotes: ["error", "double", {avoidEscape: true}],
    semi: ["error", "always"],
    strict: ["error", "global"],
    eqeqeq: ["error", "smart"],
    "no-redeclare": ["error", {builtinGlobals: true}],
    "no-caller": "error",
    "no-console": "off"
  },
  globals: {
    Promise: true
  }
};
