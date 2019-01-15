const fs = require('fs');
const util = require('util');
const express = require('express');

const app = express();

const readFileAsync = util.promisify(fs.readFile);

async function readFile(req, res) {
  let data = '';
  try {
    data = await readFileAsync('10.async-await.js');
  } catch (e) {
    console.error('error', e);
    return res.status(500).send('Villa');
  }

  // Ef við köstum þessari villu og pössum ekki upp á að grípa mun
  // forritið okkar krassa. Á við um allar villur utan try catch í
  // async middleware!
  // throw new Error('boo');

  return res.type('txt').send(data);
}

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

// Grípum villur og erum örugg
app.get('/', catchErrors(readFile));

// Ónei! Villur munu krassa forritinu okkar
app.get('/unsafe', readFile);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
