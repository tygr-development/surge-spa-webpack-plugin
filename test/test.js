const fs = require('fs')
const { assert } = require('chai')

describe('Surge SPA Webpack Plugin', () => {
  
  it('Creates a 200.html page', () => {
    assert.isTrue(fs.existsSync('dist/200.html'))
  })

  it('index.html and 200.html page have the same content', () => {
    assert.isTrue(
      fs.readFileSync('dist/index.html').equals(
        fs.readFileSync('dist/200.html')
      )
    )
  })
})