/* eslint-disable no-unused-vars */

/*
Keyrt með:
node 07.error-handling.js

Keyrum nokkur middleware á mismunandi máta.
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/hello/:name', (req, res, next) => {
  const { name = '' } = req.params;

  // Þekkjum ekki "óli"
  if (name.toLocaleLowerCase() === 'óli') {
    // sendum áfram í næsta middleware, mun enda í 404
    return next();
  }

  // Ef við köstum villu hér mun hún verða gripin af errorHandler
  // throw new Error('villa úr middleware');

  return res.send(`Hello ${name}`);
});

app.get('/error', (req, res) => {
  throw new Error('Villa!');
});

function notFoundHandler(req, res, next) {
  res.status(404).send('404 Not Found');
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send('Villa!');
}

app.use(notFoundHandler);

// Ef við skilgreinum ekki error handling middleware fáum við sjálfgefin
// skilaboð frá express um villu
app.use(errorHandler);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
