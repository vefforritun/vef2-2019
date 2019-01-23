/*
Keyrt með:
node 09.datvalidator.js

Keyrir upp express vefþjón á http://localhost:3000 sem bíður upp á að fylla út
form með nafni, netfangi og kennitölu.
App notar express urlencoded middleware til að vinna úr gögnum.
Notar express-validator til að validate'a gögn úr formi og birta villur ef gögn
líta ekki rétt út. Verðum að gera þrátt fyrir að HTML input hafi required, email
type eða pattern, auðveldlega hægt að slökkva á því í vafra.
*/

const express = require('express');
const { check, validationResult } = require('express-validator/check');

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

  // Þetta er bara validation, ekki sanitization
  check('name').isLength({ min: 1 }).withMessage('Nafn má ekki vera tómt'),
  check('email').isLength({ min: 1 }).withMessage('Netfang má ekki vera tómt'),
  check('email').isEmail().withMessage('Netfang verður að vera netfang'),
  check('ssn').isLength({ min: 1 }).withMessage('Kennitala má ekki vera tóm'),
  check('ssn')
    .matches(/^[0-9]{6}-?[0-9]{4}$/)
    .withMessage('Kennitala verður að vera á formi 000000-0000'),

  (req, res) => {
    const {
      name = '',
      email = '',
      ssn = '',
    } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(i => i.msg);
      return res.send(`${template(name, email, ssn)}
      <p>Villur:</p>
      <ul>
        <li>${errorMessages.join('</li><li>')}</li>
      </ul>`);
    }

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
