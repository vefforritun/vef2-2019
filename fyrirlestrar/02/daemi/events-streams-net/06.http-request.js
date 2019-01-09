/*
Keyrt með:
node 06.http-request.js

Keyrir upp HTTP server sem svarar á http://127.0.0.1:3000/
Birtir form og ef client sendir gögn mun server skrifa þau út í console
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer();
server.on('request', (request, response) => {
  const { method, url } = request;

  console.log('method:', method);
  console.log('url:', url);

  const body = [];
  request.on('data', (chunk) => {
    console.log('chunk', chunk);
    body.push(chunk.toString('utf8'));
  }).on('end', () => {
    console.log('body:', body.join(''));
  });

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.write(`
<form method="post">
  <input type="text" name="foo">
  <button>Senda</button>
</form>
  `);
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
