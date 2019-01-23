/*
Keyrt með:
node 06.json-middleware.js

Keyrir upp express vefþjón á http://localhost:3000 sem tekur við JSON gögnum og
birtir þau til baka til notanda.
App notar express json middleware til að vinna úr gögnum í stað straums.
Hægt að prófa með cURL:
curl -H "Content-Type: application/json" -d '{"foo": "bar"}' http://localhost:3000/
*/

const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  res.send(`POST gögn: ${JSON.stringify(req.body)}`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
