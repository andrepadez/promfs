var gracefulFS = require('graceful-fs')
var Promise = require('bluebird')
var mkdirp = Promise.promisify(require('mkdirp'))
var fs = Promise.promisifyAll(gracefulFS)

module.exports = fs

fs.existsAsync = function(path){
  return new Promise((resolve, reject) => {
    fs.exists(path, resolve)
  })
}

fs.mkdirp = mkdirp
