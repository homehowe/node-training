var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

// addEventListener

life.on('please', function(who){
	console.log('give ' + who + ' water')
})

life.on('please', function(who){
	console.log('give ' + who + ' food')
})

life.emit('please', 'me')