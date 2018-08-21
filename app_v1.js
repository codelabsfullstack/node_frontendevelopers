const http = require("http");
const path = require("path");
const fs = require("fs");
const extensions = {
	".html": "text/html",
	".css": "text/css",
	".js": "application/javascript",
	".png": "image/png",
	".gif": "image/gif",
	".jpg": "image/jpeg"
}

http.createServer((req, res) => {
	
	// look for a filename in the URL, default to index.html
	var filename = path.basename(req.url) || "index.html",
			ext = path.extname(filename),
			dir = path.dirname(req.url).substring(1),
			// __dirname is a built-in variable containing the path where the code is runing
			localPath = __dirname + "/public/";

	console.log(dir);

	if (ext == ".html") {
		localPath += filename;
		// verify that is file actually exists and load it, or else return a 404
		fs.stat(localPath, (err, exists) => {
			if (exists) {
				getFile(localPath, res);
			} else {
				res.writeHead(404);
				res.end()
			}
		})
	}

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