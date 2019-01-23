/*
Keyrt með:
node 05.data.js

Keyrir upp express vefþjón á http://localhost:3000 sem bíður upp á að fylla út
form með nafni, netfangi og kennitölu.
App notar express urlencoded middleware til að vinna úr gögnum.
Notar express-validator til að sanitize'a gögn en validate'ar ekki.
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/post">
      <input type="text" name="data">
      <button>Senda</button>
    </form>
  `);
});

app.post('/post', (req, res) => {
  // Vinnum með gögn hér
  // Birtum ekki niðurstöðu, heldur redirectum á þakkar síðu
  // res.send('Gögn móttekin!');
  res.redirect('/thanks');
});

app.get('/thanks', (req, res) => {
  res.send('Gögn móttekin!');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
