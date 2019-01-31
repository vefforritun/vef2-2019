/*
Keyrt með:
node 08.csp.js

Notar `cal` skipun á mac/linux sem dæmi, hægt að breyta í annað, t.d. `dir` á
windows.

Getum skipt um ár með því að senda inn ár sem year querystring.. en ef við höfum
eins og er gefum við aðgang að öllu stýrikerfi, með því t.d. að senda inn
?year=2019 | ls
*/

const { exec } = require('child_process');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // EKKI GERA SVONA! Getum injectað einhverju ljótu hér
  const year = req.query.year || 2018;
  const command = `cal ${year}`;

  exec(command, (err, data) => {
    if (err) console.error(err);

    return res.send(`<pre>${data}</pre>`);
  });
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
