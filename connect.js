var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static')

var app = connect();

// respond to all requests
app.use(function(req, res){
  res.end('Hello from Connect!\n');
});

app.use(serveStatic("/",{'index': ['index.html', 'index.htm']}));

//create node.js http server and listen on port
http.createServer(app).listen(8000, "127.0.0.1");