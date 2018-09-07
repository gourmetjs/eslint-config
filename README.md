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

- `node`: Node with ES6 syntax (default)
- `react`: React Isomorphic App
- `gourmet_app`: Gourmet applications
- `gourmet_lib`: Gourmet libraries using CommonJS only

# Installing additional packages

`eslint-config-gourmet` requires the following additional packages as peerDependencies.
You should install them, side by side.
