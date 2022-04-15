Building CRUD App
---

- [NEAR Docs](https://docs.near.org/docs/tutorials/apps/todos-crud-app)

* **Backend** - Assembly Script
* **Frontend** - Vite

## Issue

- For Apple M1, If you cannot install `near-sdk-as` and get an `Unsupported platform: Darwin arm64` error - [Link](https://docs.near.org/docs/faq/developer-faq#4-building-smart-contracts-on-apple-m1-arm64)

```bash
npm install --save-dev --ignore-scripts near-sdk-as
```

Create project with Vite:

```
yarn create vite todos-crud-web --template react-ts
```