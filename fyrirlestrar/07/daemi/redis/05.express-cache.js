/*
Keyrt með:
node 05.express-cache.js

*/

const express = require('express');
const { Client } = require('pg');

const connectionString = 'postgres://:@localhost/examples-2019';


function sessionCounter(req, res) {
  console.log('session', req.session);

  const { originalUrl } = req;
  const count = req.session.views[originalUrl];
  res.send(`
    <p>Þú hefur opnað ${originalUrl} ${count} sinnum</p>
    <p><a href="/">Opna /</a></p>
    <p><a href="/foo">Opna /foo</a></p>
    <p><a href="/bar">Opna /bar</a></p>
  `);
}

app.get('/', sessionCounter);
app.get('/foo', sessionCounter);
app.get('/bar', sessionCounter);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
