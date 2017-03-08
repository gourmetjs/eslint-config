# eslint-config-gourmet

ESLint shareable config for the Gourmet style.

# Basic usage

### JavaScript format (`.eslintrc.js`)
```js
module.exports = {
  extends: "gourmet",
  root: true
};
```

### JSON format (`.eslintrc.json`)
```json
{
  "extends": "gourmet",
  "root": true
}
```

# Configuration sets

You can choose a configuration set based on the type of your target environment by specifying the name after a slash like `"gourmet/node"`.

- `cjs`: CommonJS
- `cjs_es6`: CommonJS with ES6 syntax
- `node`: Node
- `node_es6`: Node with ES6 syntax (default)
- `gourmet`: Gourmet Runtime
- `gourmet_jsx`: Gourmet Runtime with ES6 syntax
- `browser`: Browser
- `browser_cjs`: Browser using CommonJS
- `browser_cjs_es6`: Browser using CommonJS with ES6 syntax
