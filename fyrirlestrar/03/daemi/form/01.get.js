/*
Keyrt með:
node 01.get.js

Keyrir upp express vefþjón á http://localhost:3000 sem bíður upp á að fylla út
form sem sent er með GET á /get þar sem gögn úr formi eru birt.
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
<form method="get" action="/get">
  <input type="text" name="data">
  <button>Senda</button>
</form>
  `);
});

app.get('/get', (req, res) => {
  res.send(`GET gögn: ${req.query.data}`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
