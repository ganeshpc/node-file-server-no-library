const http = require("http");
const router = require('./src/files.routes');

const port = 8000;

const server = http.createServer((req, res) => {
	router.handle(req, res);
});

server.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
