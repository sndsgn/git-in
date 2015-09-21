var http = require('http');
var url = require('url');
var fs = require('fs');

var port = 3333;
var ip = '127.0.0.1';

var requestHandler = function(req, res) {
  var path = url.parse(req.url, true).pathname;
  if(path === '/') {
    res.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile('../client/index.html', function(err, data) {
      if(err) {
        console.log(err);
      }
      res.end(data);
    });
  }
  if(path === '/tachyons.css') {
    res.writeHead(200, {'Content-type': 'text/css'});
    fs.readFile('../client/tachyons.css', function(err, data) {
      if(err) {
        console.log(err);
      }
      res.end(data);
    });
  }
  if(path === '/bower_components/jquery/dist/jquery.js') {
    res.writeHead(200, {'Content-type': 'application/javascript'});
    fs.readFile('../bower_components/jquery/dist/jquery.js', function(err, data) {
      if(err) {
        console.log(err);
      }
      res.end(data);
    });
  }
  if(path === '/bower_components/underscore/underscore.js') {
    res.writeHead(200, {'Content-type': 'application/javascript'});
    fs.readFile('../bower_components/underscore/underscore.js', function(err, data) {
      if(err) {
        console.log(err);
      }
      res.end(data);
    });
  }
  if(path === '/bower_components/backbone/backbone.js') {
    res.writeHead(200, {'Content-type': 'application/javascript'});
    fs.readFile('../bower_components/backbone/backbone.js', function(err, data) {
      if(err) {
        console.log(err);
      }
      res.end(data);
    });
  }
  if(path === '/App.js') {
    res.writeHead(200, {'Content-type': 'application/javascript'});
    fs.readFile('../client/App.js', function(err, data) {
      if(err) {
        console.log(err);
      }
      res.end(data);
    });
  }
};

var server = http.createServer(requestHandler);

server.listen(port, ip, function() {
  console.log('Listening at ' + ip + ' on port ' + port);
});



