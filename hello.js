var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Mani!\n'); // build should pass now!
}).listen(1111, 'localhost');
console.log('Server running at http://localhost:1111/');
