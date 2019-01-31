/*
Keyrt með:
node 05.powered-by.js

Keyrir upp express þjón sem sjálfgefið „lekur“ því að hann sé keyrður af express
Gæti hjálpað árásaraðilum að finna vefjþóna til að gera árás á ef upp kemur
villa í Express.
*/

const express = require('express');

const app = express();

// Ekki leka að við séum að keyra express
// app.set('x-powered-by', false);

app.get('/', (req, res) => {
  res.send('<p>Halló heimur</p>');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
