/*
Keyrt með:
node 05.urlencoded-middleware.js

Keyrir upp express vefþjón á http://localhost:3000 sem bíður upp á að fylla út
form með texta og skrá sem sent er með multipart/form-data á /post
App notar express urlencoded middleware til að vinna úr gögnum í stað straums.
Birtir innslegin gögn ásamt heiti á skrá.
*/

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
<form method="post" action="/post" enctype="application/x-www-form-urlencoded">
  <input type="text" name="data">
  <input type="file" name="file">
  <button>Senda</button>
</form>
  `);
});

app.post('/post', (req, res) => {
  res.send(`POST gögn: ${JSON.stringify(req.body)}`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
