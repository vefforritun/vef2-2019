/*
Keyrt með:
node 01.content-type.js

Keyrir upp express vefþjón sem svarar á http://localhost:3000

GET /
HEAD /
  Setur aukalega headerinn "Example"
POST /
PUT /
DELETE /

Hægt að prófa með því að nota cURL:

HEAD / => curl --head http://localhost:3000
GET / => curl -v http://localhost:3000 (-v sýnir allt sem gerist—verbose)
POST / => curl -X POST http://localhost:3000/
PUT / =>  curl -X PUT http://localhost:3000/
DELETE / => curl -X DELETE http://localhost:3000/
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.set('Example', '05.http-methods');
  res.send('GET method');
});

app.post('/', (req, res) => {
  res.send('POST method');
});

app.put('/', (req, res) => {
  res.send('PUT method');
});

app.delete('/', (req, res) => {
  res.send('DELETE method');
});


const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
