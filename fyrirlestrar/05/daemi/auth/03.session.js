/*
Keyrt með:
node 03.session.js

Keyrir upp express vefjón sem notar session til að telja heimsóknir.

Notar `express-session` pakkann til að sjá um session.
*/

const express = require('express');
const session = require('express-session');

const sessionSecret = 'leyndarmál';

const app = express();
app.use(session({
  name: 'counter.sid',
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
}));

app.use((req, res, next) => {
  const { originalUrl } = req;

  if (!req.session.views) {
    req.session.views = {};
  }

  if (!req.session.views[originalUrl]) {
    req.session.views[originalUrl] = 0;
  }

  req.session.views[originalUrl] += 1;

  next();
});

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
