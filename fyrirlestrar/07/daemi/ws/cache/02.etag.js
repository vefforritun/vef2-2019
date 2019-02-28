/*
Keyrt með
node 02.etag.js

Keyrir express vefþjón sem skilar sama etag fyrir öll request. Veldur því að
eftir fyrsta request er nýjum gögnum aldrei skilað.
*/

const express = require('express');

const app = express();

// *allar* request með If-None-Match haus munu fá upprunalegu gögn þar sem við
// skilum alltaf sama etag
app.set('etag', () => '123');

app.get('/', (req, res) => {
  res.json({ date: new Date() });
});

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
