const fs = require('fs');
const http = require('http');

const host = '127.0.0.1';
const port = 5000;
const server = http.createServer();

server.on('request', (req, res) => {
  fs.readFile('huge.txt', (err, data) => {
    if (err) throw err;

    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Server @ http://${host}:${port}/`);
});
