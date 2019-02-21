/*
Keyrt með:
node 04.put.js

Keyrir upp express vefjón sem leyfir að sækja lista af færslum og uppfæra færslu
með nýjum gögnum svo lengi sem þau eru lögleg, ekki þarf að skilgreina bæði
`title` og `name`, hægt er að uppfæra annaðhvort.
Geymir gögn í minni.

Með cURL:

> curl -X PATCH -H "Content-Type: application/json" -d '{"title": "asdf"}' http://localhost:3000/4
{"error":"Not found"}

> curl -X PATCH -H "Content-Type: application/json" -d '{"title": "asdf"}' http://localhost:3000/2
{"id":2,"title": "asdf","name": "Anna"}
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

// hjálparfall sem athuga hvort "s" sé null, undefined eða falsy
function isEmpty(s) {
  return s == null && !s;
}

app.patch('/:id', (req, res) => {
  const { id } = req.params;

  // verðum að vita hvort gögnin séu send inn eða aðeins falsy
  const { title, name } = req.body;

  const item = data.find(i => i.id === parseInt(id, 10));

  if (!item) {
    return res.status(404).json({ error: 'Not found' });
  }

  const errors = [];

  // Þetta gæti valdið vandræðum ef title mætti vera uppfært sem tómi strengur
  if (!isEmpty(title)) {
    if (typeof title !== 'string' || title.length === 0) {
      errors.push({
        field: 'title',
        error: 'Title must be a non-empty string',
      });
    }
  }

  if (!isEmpty(name)) {
    if (typeof name !== 'string' || name.length === 0) {
      errors.push({
        field: 'name',
        error: 'Name must be a non-empty string',
      });
    }
  }

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  if (!isEmpty(title)) {
    item.title = title;
  }

  if (!isEmpty(name)) {
    item.name = name;
  }

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
