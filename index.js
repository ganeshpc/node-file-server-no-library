const http = require("http");

require('dotenv').config();

const router = require('./src/files.routes');

const port = process.env.PORT;

const server = http.createServer((req, res) => {
	router.handle(req, res);
});

server.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
