/*
Keyrt með:
node 02.cookie.js

Keyrir upp express vefjón sem setur kökur og birtir með mismunandi stillingum.

Notar `cookie-parser` pakkann til að undirrita kökur.
*/

const express = require('express');
const cookieParser = require('cookie-parser');

// ATH þetta dæmi virkar aðeins ef opnað á http://127.0.0.0.1:3000 ekki á
// http://localhost:3000 því cookie er aðeins sett ef lén hefur amk einn punkt
// Chrome mun ekki setja cookies á 127.0.0.1 en Firefox og Safari gera það
const hostname = '127.0.0.1';
const port = 3000;

const cookieHostname = '127.0.0.1';

// Þetta er lykillinn staðfestir undirritaðar kökur
const cookieSecret = 'top secret leyndarmál';

const app = express();
app.use(cookieParser(cookieSecret));

app.get('/', (req, res) => {
  const { cookies, signedCookies } = req;

  console.log('Cookies', cookies, signedCookies);

  // Aðgengileg gegnum `document.cookie`
  res.cookie('session', 'hello world!', { httpOnly: false });

  // Ekki aðgengileg gegnum `document.cookie`
  res.cookie('data', { foo: '1' }, { domain: cookieHostname, httpOnly: true });

  // Kaka verður vistuð undirrituð og aðgengileg í `req.signedCookies`
  res.cookie('signed', 'top secret', { domain: cookieHostname, signed: true });

  res.cookie(
    '2min',
    'expiring in two minutes',
    { domain: cookieHostname, expires: new Date(Date.now() + 120000) },
  );

  res.cookie(
    '10years',
    'expiring in ten years',
    { domain: cookieHostname, expires: new Date(Date.now() + 3.154e+11) },
  );

  res.send(`
  <p>Cookies: ${JSON.stringify(cookies)}</p>
  <p>Signed cookies: ${JSON.stringify(signedCookies)}</p>
  `);
});

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
