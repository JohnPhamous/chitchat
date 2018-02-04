let http = require('http');

let server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>The server is working!</h1>');
  response.end();
});

server.listen(8000);
