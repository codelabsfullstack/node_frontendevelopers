const http = require('http');
const querystring = require('querystring');
const url = require('url');

http.createServer((req, res) => {
	var path = url.parse(req.url).pathname.split("/");
	if(req.method == "GET" && path[1] == "sayHello") {
		const userName = path[2] + " " + path[3];
		res.end(`Hola: ${userName}`);
	}
}).listen(8000, "127.0.0.1");

/*http.createServer((req, res) => {
	const qs = querystring.parse(req.url.split("?")[1]);
	console.log(qs)
	res.end(`Hola: ${qs.name} ${qs.lastname}`);
}).listen(8000, "127.0.0.1");*/