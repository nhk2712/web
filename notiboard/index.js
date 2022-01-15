//Load HTTP module
const http = require("http");
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('./web/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    const server = http.createServer((req, res) => {

        //Set the response HTTP header with HTTP status and Content type
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(html)
        res.end();
    });

    //listen for request on port 3000, and as a callback function have the port listened on logged
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});

