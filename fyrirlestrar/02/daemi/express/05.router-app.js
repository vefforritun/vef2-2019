/*
Keyrt með:
node 05.router-app.js

Keyrir express app sem notar router úr 05.router.js ásamt því að skilgreina
eigið route á app sem notar redirect til að flytja á /foo.
Öll route úr 05.router.js eru aðgengileg undir /foo
*/

const express = require('express');
const router = require('./05.router');

const app = express();

app.use('/foo', router);

app.get('/', (req, res) => {
  res.redirect('/foo');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
