var fs = require('../lib')
var path = require('path')

describe('fs.existsAsync', () => {
  it('should resolve with true when file exists', (done) => {
    fs.existsAsync(path.join(__dirname, 'exists-async.js'))
      .then((exists) => assert.equal(exists, true))
      .done(done)
  })

  it('should resolve with false when file exists', (done) => {
    fs.existsAsync(path.join(__dirname, 'non-existent-file.js'))
      .then((exists) => assert.equal(exists, false))
      .done((done))
  })
})