/*
Keyrt með:
node 05.http.js

Keyrir upp HTTP server sem svarar á http://127.0.0.1:3000/ með því að skrifa
"Hello World" í response straum sem sendur er client (vafra).
*/

const http = require('http');

const host = '127.0.0.1';
const port = 3000;
const server = http.createServer();

server.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, host, () => {
  console.log(`Server @ http://${host}:${port}/`);
});
