# Introduction

Too lazy to rewrite all the ESLint configuration stuff? So are we!

## What is this ?

This package contains a shareable `Eslint` flat configuration. Currently it is support `React.js` and `Next.js` only.

## Package Name

> @betahcoding/eslint-config

## How to use

1. Install the package
   Use your prefered package manager, in this example I will use `NPM`

   > npm install @betahcoding/eslint-config

2. Write the config
   In your local project file, find or create a file named `eslint.config.js`, then replace with this codes below:

```javascript
import { reactJsConfig } from '@betahcoding/eslint-config';

export default [
  ...reactJsConfig,
  // Add your preferred plugins, rules, and other ESLint-related settings below..
  {
    plugins: {},
    rules: {},
  },
];
```

then wait for couple seconds or restart your local `Eslint` server to see the changes.
