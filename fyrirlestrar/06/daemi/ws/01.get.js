/*
Keyrt með:
node 01.get.js

Keyrir upp express vefjón sem leyfir að sækja lista af færslum eða staka færlslu
eftir id.

Með cURL:

> curl http://localhost:3000
[{"id":1,"title":"Foo"},{"id":2,"title":"Bar"}]

> curl http://localhost:3000/2
{"id":2,"title":"Bar"}
*/

const express = require('express');

const app = express();

const data = [
  { id: 1, title: 'Foo' },
  { id: 2, title: 'Bar' },
];

app.get('/', (req, res) => {
  res.json(data);
});

app.get('/:id', (req, res) => {
  const { id } = req.params;

  const item = data.find(i => i.id === parseInt(id, 10));

  if (item) {
    return res.json(item);
  }

  return res.status(404).json({ error: 'Not found' });
});

function notFoundHandler(req, res, next) { // eslint-disable-line
  console.warn('Not found', req.originalUrl);
  res.status(404).json({ error: 'Not found' });
}
app.use(notFoundHandler);

const port = 3000;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
