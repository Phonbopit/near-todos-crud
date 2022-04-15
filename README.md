Building CRUD App
---

- [NEAR Docs](https://docs.near.org/docs/tutorials/apps/todos-crud-app)

* **Backend** - Assembly Script
* **Frontend** - Vite

## Issue

1. For Apple M1, If you cannot install `near-sdk-as` and get an `Unsupported platform: Darwin arm64` error - [Link](https://docs.near.org/docs/faq/developer-faq#4-building-smart-contracts-on-apple-m1-arm64)

```bash
npm install --save-dev --ignore-scripts near-sdk-as
```

2. AssemblyScript v0.20.x not working with `as-pect`, re


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