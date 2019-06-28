# Surge SPA Webpack Plugin

This plugin creates a copy of the index.html file and calls it 200.html.

Surge redirects all requests to this file if no other file in the dist directory match the request.

## Installation

```
yarn add --dev surge-spa-webpack-plugin
```

```
npm install --save-dev surge-spa-webpack-plugin
```

## Usage

```js

const SurgeSPAWebpackPlugin = require('surge-spa-webpack-plugin')

module.exports = {
  ...
  plugins: [
    new SurgeSPAWebpackPlugin()
  ]
}

```

## Tests

First prepare the test directory by installing this plugin and building an example webpack project

```
yarn prepare-tests
```

Then

```
yarn test
```
