var assert = require('assert')
var exec = require('nibbler-exec')
var upstart = require('strong-service-upstart')

exports.install = function(service, options, cb) {
  var conf = upstart(service)
  // TODO: use some kind of remote FS thingy
  var cat = exec('cat > /etc/init/' + service.name + '.conf', options, cb)
  cat.stdin.end(conf)
}

exports.start = function(service, options, cb) {
  var name = service.name || service
  assert.equal(typeof name, 'string', 'service name is required and needs to be a string')
  exec('status ' + name + ' | grep "start/running" || start ' + name, options, cb)
}
