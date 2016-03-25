const fs = require('../lib')
const dirPath = './test-directory'

describe('mkdirp', () => {
  after((done) => {
    fs.rmdirAsync(dirPath)
      .then(() => done())
  })

  it('should create directory', (done) => {
    fs.mkdirp(dirPath)
      .done(() => {
        done()
      })
  })
})
