const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
	var data = "";

	if(req.method == "GET") {
		getFile(__dirname + "/public/simpleForm.html", res);
	}

	if(req.method == "POST") {
		req.on("data", chunk => {
			data += chunk;
		})
	}

	req.on("end", () => {
		res.end();
	})
}).listen(8000, "127.0.0.1");

function getFile(localPath, res) {
	// read the file in and return it, or return a 500 if it can't be read
	fs.readFile(localPath, (err, contents) => {
		if (!err) {
			// use defaults instead of res.writeHead()
			res.end(contents)
		} else {
			res.writeHead(500);
			res.end()
		}
	})
}