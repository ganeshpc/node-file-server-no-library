const http = require('http');

const requestListener = (req, res) => {
    res.writeHead(200, {
        myHeader: "my value"
    });
    res.end("My raw server");
}

const server = http.createServer(requestListener)

server.listen(8000);