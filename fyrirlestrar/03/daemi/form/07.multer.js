/*
Keyrt með:
node 07.multer.js

Keyrir upp express vefþjón á http://localhost:3000 sem bíður upp á að fylla út
form með einni skrá sem POSTað er á /single eða tvær skrár sem POSTað er á /many
App notar multer middleware til að vinna úr gögnum og ná í innihald þeirra.
Birtir skráarnafn, MIME type og innihald stöku skrár
Birtir lista af skráarnöfnum og MIME types fyrir tvær skrár
*/

const express = require('express');
const multer = require('multer');

const upload = multer();

const app = express();

app.get('/', (req, res) => {
  res.send(`
<h2>Stök skrá</h2>
<form method="post" action="/single" enctype="multipart/form-data">
  <input type="file" name="data">
  <button>Senda</button>
</form>

<h2>Fylki af skrám</h2>
<form method="post" action="/many" enctype="multipart/form-data">
  <input type="file" name="data">
  <input type="file" name="data">
  <button>Senda</button>
</form>
  `);
});

app.post('/single', upload.single('data'), (req, res) => {
  const {
    originalname: filename = '',
    mimetype = '',
    buffer = null,
  } = req.file;

  res.send(
    `Innihald ${filename} af gerð ${mimetype} er ${buffer.toString('utf8')}`,
  );
});

app.post('/many', upload.array('data'), (req, res) => {
  const names = req.files.map(i => i.originalname).join(', ');
  const mimetypes = req.files.map(i => i.mimetype).join(', ');

  res.send(
    `${req.files.length} skrár, með skráarnöfn ${names} af týpum ${mimetypes}`,
  );
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
