/*
Keyrt með:
node md2html-callback.js

þar sem til er mappa sem heitir `md/` sem inniheldur markdown skrár.

Önnur útgáfa af sömu virkni og í md2html-sync.js sem notar callbacks og þ.a.l.
asynchronous köll til að lesa af disk.

Öll lógík saman í einu og fer að bera merki um of nestaðan kóða/_callback hell_
*/

const fs = require('fs');
const path = require('path');
const marked = require('marked');

fs.readdir('./md', (err, data) => {
  if (err) console.error(err);

  data.forEach((filename) => {
    fs.readFile(path.join('./md', filename), (readErr, fileData) => {
      if (readErr) console.error(readErr);

      const md = marked(fileData.toString('utf8'));

      const newFilename = `${path.basename(filename, '.md')}.html`;
      const newPath = path.join('./html', newFilename);

      fs.writeFile(newPath, md, { encoding: 'utf8' }, (writeErr) => {
        if (writeErr) console.error(writeErr);

        console.log(`Wrote ${newPath}`);
      });
    });
  });
});
// Margar lokanir á svigum og curly brackets í einu benda til kóða sem þarf
// að refactora
