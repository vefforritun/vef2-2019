/*
Keyrt með:
node 01.basic-auth.js

Keyrir upp express vefjón sem bíður upp á að skoða leyndarmál. Nema til að geta
séð það þarf að gefa upp notandanafn og lykilorð.
Notar `basic-auth` pakkann til að lesa úr Authorization header
*/

const express = require('express');
const basicAuth = require('basic-auth');

const app = express();

function basicAuthMiddleware(req, res, next) {
  const name = 'óli';
  const pass = 'cool';

  console.info(req.headers.authorization);

  const credentials = basicAuth(req);

  if (!credentials || credentials.name !== name || credentials.pass !== pass) {
    res.writeHead(401, {
      'WWW-Authenticate': 'Basic realm="test"',
    });

    return res.end();
  }

  return next();
}

app.get('/', (req, res) => {
  res.send('<a href="/secret">Leyndarmál</a>');
});

app.get('/secret', basicAuthMiddleware, (req, res) => {
  res.send('ssh!');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
