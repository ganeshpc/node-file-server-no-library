const http = require("http");

const port = 8000;

const homepageRequest = (req, res) => {
    res.writeHead(200, {
        "content-type": "text/html",
    });
    res.end(`
            <!DOCTYPE html>
                <head>
                    <title>File Server</title>
                </head>
                <style>
                    *,
                    html {
                        margin: 0;
                        padding: 0;
                        border: 0;
                    }

                    html {
                        width: 100%;
                        height: 100%;
                    }

                    body {
                        width: 100%;
                        height: 100%;
                        position: relative;
                    }

                    .center {
                        width: 100%;
                        height: 50%;
                        margin: 0;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                    }
                </style>
                <body>
                    <div class="center">
                        <h1>Filer Server</h1>
						<ul>
							<li><a href="/upload">Upload File</a></li>
							<li><a href="/list">List Files</a></li>
						</ul>
                    </div>
                </body>

            </html>
    `);
};

const server = http.createServer(homepageRequest);

server.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
