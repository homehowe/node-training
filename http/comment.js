var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content': 'go',
	'cid': 348
})

var options = {
	hostname: 'xxx.xxx.xxx',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {

	}
}

var req = http.request(options, function(res){
	console.log('Status ' + res.statusCode)
	console.log('headers ' + JSON.stringify(res.headers))

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end', function(){
		console.log('over')
	})

})

req.on('error', function(e){
	console.log('Error:' e.message)
})

req.write(postData)
req.end()