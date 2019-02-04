/*
Keyrt með:
node 04.xss-log.js

Keyrir upp express þjón sem loggar heimsóknir á / og birtir á /log
Log upplýsingar geymdar í minni til einföldunar á dæmi.
Ef notandi sendir XSS í `user-agent` header mun það birtast á /log

Getum breytt user-agent með curl:
curl -A "<script>alert(1)</script>" http://localhost:3000
*/

// Geymum log í minni meðan app keyrir
const log = [];

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const logMessage = {
    time: new Date(),
    url: req.originalUrl,
    userAgent: req.header('User-Agent'),
  };

  log.push(logMessage);

  res.send('Halló heimur');
});

app.get('/log', (req, res) => {
  const logs = log
    .map(i => `${i.time}\t${decodeURI(i.url)}\t${i.userAgent}`) // Ekki öruggt!
    .join('\n');
  res.send(`<pre>${logs}</pre>`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
