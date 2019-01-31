/*
Keyrt með:
node 09.csrf.js

Keyrir upp express þjón með formi á /
Þetta form hefur uppsetta csrf vörn gegnum csurf pakkann. Formið er ekki gilt
nema að það innihaldi gildi _csrf sem kemur frá middlewareinu gegnum
`req.csrfToken()`.

Þarf að nota `cookie-parser` til að fá aðgang að cookies.
*/

const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const express = require('express');

const csrfProtection = csrf({ cookie: true });

const app = express();

app.use(express.urlencoded({ extended: true }));

// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());

app.get('/', csrfProtection, (req, res) => {
  res.send(`
<form method="post" action="/process">
  <input type="hidden" name="_csrf" value="${req.csrfToken()}">
  <input type="text" name="data">
  <button>Senda</button>
</form>`);
});

app.post('/process', csrfProtection, (req, res) => {
  res.send('data is being processed');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
