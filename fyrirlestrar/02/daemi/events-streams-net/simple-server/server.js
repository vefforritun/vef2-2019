/*
Keyrt með:
node server.js

Keyrir upp server sem hlustar á `127.0.0.1:3000`, þ.e.a.s. á `localhost` á porti
3000. Svarar fyrir nokkrar slóðir og skilar viðeigandi gögnum, sjá athugasemdir
að neðan.
Aðeins dæmi, ekki nota fyrir neitt alvöru.
*/

const http = require('http');
const fs = require('fs');
const util = require('util');
const path = require('path');

const readFileAsync = util.promisify(fs.readFile);

const hostname = '127.0.0.1';
const port = 3000;

/**
 * Finnur content-type fyrir skrá til að skila í response.
 *
 * @param {string} ext Ending til að finna content-type fyrir
 */
function contentType(ext) {
  switch (ext) {
    case '.css':
      return 'text/css';
    case '.html':
      return 'text/html';
    default:
      return 'text/plain';
  }
}

/**
 * "Template" fyrir efnið okkar, setur upp sameiginlegt HTML með vísun í css,
 * valmynd og efni innan <main>
 *
 * @param {string} title Titill á síðu
 * @param {string} body Meginmál síðu
 */
function template(title, body) {
  return `<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <nav>
      <ul>
        <li><a href="/">Forsíða</a></li>
        <li><a href="about.html">Um</a></li>
        <li><a href="/clock">Klukka</a></li>
      </ul>
    </nav>
    <main>
      ${body}
    </main>
  </body>
</html>`;
}

const server = http.createServer();

server.on('request', async (request, response) => {
  const { url } = request;

  // höfum ekkert favicon, vafri biður ítrekað um og nennum ekki villu
  if (url === '/favicon.ico') {
    return response.end();
  }

  try {
    // reynym að lesa skrá, finna endingu og skrifa header
    const file = path.basename(url);
    const content = await readFileAsync(file);
    const extension = path.extname(file).toLowerCase();
    response.writeHead(200, { 'Content-Type': contentType(extension) });

    // sendum efni og hættum, keyrum ekkert fyrir neðan út af "return"
    return response.end(content);
  } catch (e) {
    console.error(e);
    // Gátum ekki lesið skrá, kannski passar request við eitthvað að neðan
  }

  response.writeHead(200, { 'Content-Type': 'text/html' });

  if (url === '/') {
    response.write(template('Forsíða', '<p>Halló heimur</p>'));
  } else if (url === '/clock') {
    response.write(
      template('Klukka', `<p>Klukkan er ${new Date().toUTCString()}</p>`),
    );
  } else {
    response.statusCode = 404;
    response.write(template('404 fannst ekki', `<p>${url} fannst ekki</p>`));
  }

  return response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
