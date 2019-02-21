/*
Keyrt með:
node 03.put.js

Keyrir upp express vefjón sem leyfir að sækja lista af færslum og uppfæra færslu
með nýjum gögnum svo lengi sem þau eru lögleg og öll séu gefin.
Geymir gögn í minni.

Með cURL:

> curl -X PUT -H "Content-Type: application/json" -d '{"title": "asdf", "name": "Jói"}' http://localhost:3000/4
{"error":"Not found"}

> curl -X PUT -H "Content-Type: application/json" -d '{"title": "asdf", "name": "Jói"}' http://localhost:3000/2
{"id":2,"title": "asdf","name": "Jói"}
*/

const express = require('express');

const app = express();
app.use(express.json());

const data = [
  { id: 1, title: 'Foo', name: 'Jón' },
  { id: 2, title: 'Bar', name: 'Anna' },
];

app.get('/', (req, res) => {
  res.json(data);
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title = '', name = '' } = req.body;

  const item = data.find(i => i.id === parseInt(id, 10));

  if (!item) {
    return res.status(404).json({ error: 'Not found' });
  }

  const errors = [];

  if (typeof title !== 'string' || title.length === 0) {
    errors.push({
      field: 'title',
      error: 'Title must be a non-empty string',
    });
  }

  if (typeof name !== 'string' || name.length === 0) {
    errors.push({
      field: 'name',
      error: 'Name must be a non-empty string',
    });
  }

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  item.title = title;
  item.name = name;
  return res.status(200).json(item);
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
