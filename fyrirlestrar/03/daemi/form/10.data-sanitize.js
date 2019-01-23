/*
Keyrt með:
node 10.data-sanitize.js

Keyrir upp express vefþjón á http://localhost:3000 sem bíður upp á að fylla út
form með nafni, netfangi og kennitölu.
App notar express urlencoded middleware til að vinna úr gögnum.
Notar express-validator til að sanitize'a gögn en validate'ar ekki.
*/

const express = require('express');
const { sanitize } = require('express-validator/filter');

const app = express();

app.use(express.urlencoded({ extended: true }));

function template(name = '', email = '', ssn = '') {
  return `
  <form method="post" action="/post">
    <label>
      Nafn:
      <input required type="text" name="name" value="${name}">
    </label>
    <label>
      Netfang:
      <input required type="email" name="email" value="${email}">
    </label>
    <label>
      Kennitala:
      <input
        required
        type="text"
        pattern="^[0-9]{6}-?[0-9]{4}$"
        name="ssn"
        value="${ssn}"
      >
    </label>
    <button>Senda</button>
  </form>
  `;
}

app.get('/', (req, res) => {
  res.send(template());
});

app.post(
  '/post',

  // Þetta er bara sanitazion, ekki validation
  sanitize('name')
    .trim()
    .escape(),
  sanitize('email')
    .normalizeEmail(),
  sanitize('ssn')
    .blacklist('-')
    .toInt(),

  (req, res) => {
    const {
      name = '',
      email = '',
      ssn = '',
    } = req.body;

    const data = {
      name,
      email,
      ssn,
    };

    return res.send(`<p>Skráning móttekin</p><p>${JSON.stringify(data)}`);
  },
);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
