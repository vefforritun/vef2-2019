/*
Keyrt með:
node 06.middleware.js

Keyrum nokkur middleware á mismunandi máta.
*/

const express = require('express');

const app = express();

function firstMiddleware(req, res, next) {
  console.log('Request á', req.originalUrl);
  next();
}

function secondMiddleware(req, res, next) {
  res.locals.data = 'foobar';
  next();
}

function thirdMiddleware(req, res, next) {
  console.log('Allt búið!');
  next();
}

app.use(firstMiddleware);
app.use(secondMiddleware);

app.get('/', (req, res, next) => {
  res.send(res.locals.data);

  // annars brjótum við keðju
  next();
});

app.get(
  '/foo',
  // getum blandað allskonar middleware
  [firstMiddleware, firstMiddleware],
  firstMiddleware,
  (req, res) => {
    res.send('🤔');

    // köllum ekki í next(), keðja brotin
  },
);

app.use(thirdMiddleware);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
