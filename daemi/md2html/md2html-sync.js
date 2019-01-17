/*
Keyrt með:
node md2html-sync.js

þar sem til er mappa sem heitir `md/` sem inniheldur markdown skrár.

Fyrsta útgáfa sem notar synchronous föll til að lesa af disk. Á meðan þessi köll
keyra er öll Node.js keyrsla blokkuð.

Aðeins til sýnis, skal almennt ekki nota.

Sjá nánar:
https://nodejs.org/api/fs.html#fs_file_system
*/

const fs = require('fs');
const path = require('path');
const marked = require('marked');

const dir = fs.readdirSync('./md');

dir.forEach((filename) => {
  const data = fs.readFileSync(path.join('./md', filename));
  const md = marked(data.toString('utf8'));

  const newFilename = `${path.basename(filename, '.md')}.html`;
  const newPath = path.join('./html', newFilename);

  fs.writeFileSync(newPath, md);

  console.log(`Wrote ${newPath}`);
});
