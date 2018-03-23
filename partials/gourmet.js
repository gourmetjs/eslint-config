module.exports = {
  extends: "./cjs.js",
  globals: {
    DEBUG: true,
    SERVER: true,
    CLIENT: true
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true
    }
  }
};
