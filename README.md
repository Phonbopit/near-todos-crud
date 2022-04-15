Building CRUD App
---

- [NEAR Docs](https://docs.near.org/docs/tutorials/apps/todos-crud-app)

* **Backend** - Assembly Script
* **Frontend** - Vite

## Issues

1. For Apple M1, If you cannot install `near-sdk-as` and get an `Unsupported platform: Darwin arm64` error - [Link](https://docs.near.org/docs/faq/developer-faq#4-building-smart-contracts-on-apple-m1-arm64)

```bash
npm install --save-dev --ignore-scripts near-sdk-as
```

2. AssemblyScript v0.20.x not working with `as-pect`, re

3. `Buffer` polyfill with `create-react-app` (Webpack 5) -> Resolved by use `react-app-rewired` and custom webpack to use Buffer.

```
yarn add buffer process
```

File `config-overrides.js`

```
const webpack = require('webpack');
module.exports = function override(config) {
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);
  return config;
};
```

## Install

Create project with Vite:

```
yarn create vite todos-crud-web --template react-ts
```

Install `near-api-js`

```
cd todos-crud-web
yarn add near-api-js
```
