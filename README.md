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

- `node`: Node apps (default)
  - ES2017 syntax (`class`, `async`, `await`, ...)
  - CommonJS (`require()`, `module.exports`, ...)
  - No dependency other than a vanilla eslint
- `react`: React apps
  - Based on `node`, additional features as follows:
  - Browser globals (`document`, `window`, ...)
  - JSX syntax and React specific rules (`react/jsx-uses-react`, ...)
  - Requires `eslint-plugin-react@7` as a peer dependency
- `gourmet_lib`: Gourmet SSR libraries
  - Based on `react`, additional features as follows:
  - Gourmet SSR specific globals (`SERVER`, `DEBUG`, ...)
- `gourmet_app`: Gourmet SSR apps
  - Based on `gourmet_lib`, additional features as follows:
  - Module syntax (`import`, `export`, ...)
  - ES proposals (https://github.com/tc39/proposal-class-fields, ...)
  - Requires `babel-eslint@10` and `eslint-plugin-babel@5` as peer dependencies.

# Installing additional packages

As noted above, `eslint-config-gourmet` requires additional packages per your choice of configuration as below:

```sh
# For `react` and `gourmet_lib`
npm install eslint-plugin-react@7 --save-dev

# For `gourmet_app`
npm install eslint-plugin-react@7 babel-eslint@10 eslint-plugin-babel@5 --save-dev
```

> These additional packages are not specified as `peerDependencies` by `eslint-config-gourmet` because they are not required for some configurations.
