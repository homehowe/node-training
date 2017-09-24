var http = require('http')

http
.createServer(function(req, res){
	res.writeHead(200,{'Context-Type': 'text/plain'})
	res.write('Hello node')
	res.end();
})
.listen(2015)