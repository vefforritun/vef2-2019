/*
Keyrt með:
node 03.post-plain.js

Keyrir upp express vefþjón á http://localhost:3000 sem bíður upp á að fylla út
form með texta og skrá sem sent er með text/plain á /post
App notar straum til að lesa úr request
Birtir innslegin gögn ásamt heiti á skrá.
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
<form method="post" action="/post" enctype="text/plain">
  <input type="text" name="data">
  <input type="file" name="foo">
  <button>Senda</button>
</form>
  `);
});

app.use((req, res, next) => {
  const chunks = [];
  req.on('data', chunk => chunks.push(chunk));
  req.on('end', () => {
    req.body = chunks.join();
    next();
  });
});

app.post('/post', (req, res) => {
  res.send(`POST gögn: ${req.body}`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
