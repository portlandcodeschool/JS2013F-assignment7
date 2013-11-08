var http = require('http');
var url  = require('url');
var fs   = require('fs');

var portNumber = 4141;

http.createServer(function (request, response) {
  var resourceName = "";

  if (request.method === 'GET') {
    resourceName = url.parse(request.url).path;
    fs.readFile(__dirname + '/public_html' + resourceName, function (err, data) {
      if (err) {
        response.writeHead(404);
        response.end("File not found");
      } else {
        response.writeHead(200);
        response.end(data);
      }
    });
  }
}).listen(portNumber);

console.log("Listening on port " + portNumber);


//try using beefy splat --live