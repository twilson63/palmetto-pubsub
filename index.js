var axon = require('axon')
var sub = axon.socket('sub')
var pub = axon.socket('pub')

sub.on('message', function (event) {
  pub.send(event)
})

sub.bind(process.env.SUB || 5000)
pub.bind(process.env.PUB || 6000)
console.log('listening....')
