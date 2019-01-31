/*
Keyrt með:
node 08.csp.js

Setur CSP (Content-Security-Policy) header sem leyfir efni aðeins að koma frá
sömu slóð og vefur keyrir á. Mynd frá hi.is mun ekki hlaðast og console mun
hafa villu í líkingu við:
Refused to load the image 'https://www.hi.is/sites/default/files/drupal/pallas_vert.svg'
because it violates the following Content Security Policy directive:
"default-src 'self'".
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Security-Policy', 'default-src \'self\'');

  res.send(`
  <p>Halló heimur</p>
  <img src="https://www.hi.is/sites/default/files/drupal/pallas_vert.svg">
`);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
