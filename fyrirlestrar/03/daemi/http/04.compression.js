/*
Keyrt með:
node 03.compression.js

Keyrir upp express vefþjón sem þjappar svar áður en það er sent vafra, svo
lengi sem vafri skilur þjöppun.

Getum prófað með:
curl "http://127.0.0.1:3000/" -v -H "Accept-Encoding: gzip"

þar sem -H bætir við haus sem segir að við skiljum gzip þjöppun.
*/

const express = require('express');
const compression = require('compression');

const app = express();

// threshold, hversu stórt þarf efni að vera áður en við þjöppum
app.use(compression({ threshold: 0 }));

app.get('/', (req, res) => {
  res.send('<p>Halló heimur</p>');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
