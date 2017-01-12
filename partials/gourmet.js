module.exports = {
  extends: "./cjs.js",
  globals: {
    __gourmet__: true
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true
    }
  }
};
