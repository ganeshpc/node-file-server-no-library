const fsPromises = require("node:fs/promises");
const fs = require('fs')
const path = require("node:path");

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
    const files = await fsPromises.readdir(fileStorage);

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
        res.write(`<li><a href="/download?fileName=${file}" download>${file}</a></li>`)
    }

    res.end(`
						</ul>
                    </div>
                </body>
            </html>
    `);
});

router.get("/download", async (req, res) => {
    const fileName = req.queryParams.fileName;
    const fileStream = fs.createReadStream(path.join(fileStorage, fileName));

    res.writeHead(200, {
        'content-type': 'application/octet-stream',
        'content-disposition': `attachment; filename=${fileName}`
    })
    fileStream.pipe(res);
})

// temperory post request
router.post("/upload", (req, res) => {

    console.log(req.headers);
    const data = []

    req.on('data', (chunk) => {
        console.log(typeof chunk);
        data.push(chunk);
    })

    req.on('end', () => {
        const strData = Buffer.concat(data).toString()
        console.log(strData);
    })

    res.writeHead(200);
    res.end();
});

module.exports = router;
