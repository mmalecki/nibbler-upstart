# nibbler-upstart
Upstart module for [Nibbler](https://github.com/mmalecki/nibbler).

## Installation
```sh
npm install nibbler-upstart
```

## Usage
This sets up and starts a service that runs `/opt/app/server.js` using `iojs`
binary on your local host:

```js
var upstart = require('nibbler-upstart')

var service = {
  name: 'app',
  execpath: 'iojs',
  script: '/opt/app/server.js'
}

upstart.install(service, function(err) {
  if (err) throw err
  upstart.start(service, function(err) {
    if (err) throw err
  })
})
```
