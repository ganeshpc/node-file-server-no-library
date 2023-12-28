const fs = require("node:fs/promises");

const Router = require("./router");

const router = new Router();

const fileStorage = 'D:/workdir/projects/file_storage';

router.get("/", (req, res) => {
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
});

router.get("/list", async (req, res) => {
    res.writeHead(200, {
        "content-type": "text/html",
    });

    // get list of all the files
    const files = await fs.readdir(fileStorage);

    res.write(`
            <!DOCTYPE html>
                <head>
                    <title>File Server: All Files</title>
                </head>
                <body>
                    <div>
                        <h1>Filer Server: All Files</h1>
						<ul>
    `);

    for (const file of files) {
        res.write(`<li><a href="/upload">${file}</a></li>`)
    }

    res.end(`
						</ul>
                    </div>
                </body>
            </html>
    `);
});

// temperory post request
router.post("/any/post", (req, res) => {
    res.writeHead(200, {
        "content-type": "application/json",
    });
    res.write(`{"hello": "my name is hig"}`);
    res.end();
});

module.exports = router;
