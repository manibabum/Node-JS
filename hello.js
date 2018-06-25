var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Mani!\n'); // build should pass now!
}).listen(1111, 'manibabu.azurewebsites.net');
console.log('Server running at https://manibabu.azurewebsites.net:1111/');
