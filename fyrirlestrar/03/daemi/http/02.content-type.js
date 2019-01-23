/*
Keyrt með:
node 01.content-type.js

Keyrir upp express vefþjón sem svarar á:

GET /text – Birtir „hreinan“ texta—ekki HTML
GET /html – Birtir HTML í vitlausu stafasetti v. Content-Type headers
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <p><a href="/text">Texti</a></p>
    <p><a href="/html">HTML</a></p>
  `);
});

app.get('/text', (req, res) => {
  res.type('text');
  res.send('hello world');
});

app.get('/html', (req, res) => {
  // Content-Type header mun hafa hærri forgang en <meta charset> að neðan!
  res.set('Content-Type', 'text/html; charset=iso-8859-1');

  // Ef við notum res.send() hér mun það yfirskrifa Content-Type að ofan
  res.end(`<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>Halló &amp; &lt; &gt; heimur</title>
  </head>

  <body>
    <p>Halló heimur!</p>
  </body>
</html>
`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
