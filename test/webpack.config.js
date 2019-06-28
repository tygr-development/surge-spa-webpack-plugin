const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const SurgeSPAWebpackPlugin = require('surge-spa-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    }),
    new SurgeSPAWebpackPlugin()
  ]
}
