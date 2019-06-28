const PLUGIN_NAME = 'surge-spa-plugin'
/*
*  This plugin creates a copy of the index.html file and calls it 200.html.
*  Surge redirects all requests to this file if no other file in the dist
*  directory match the request.
*/
class SurgeSPAPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap(PLUGIN_NAME, compilation => {
      if(compilation.assets['index.html']) {
        compilation.assets['200.html'] = compilation.assets['index.html']
      }
    })
  }
}

module.exports = SurgeSPAPlugin
