/*
Keyrt með:
node md2html-async-await.js

þar sem til er mappa sem heitir `md/` sem inniheldur markdown skrár.

Fjórða útgáfa sem notar async og await. Þessi kóði er mjög líkur þeim sem við
höfum í fyrstu útgáfu.

*/

const fs = require('fs');
const path = require('path');
const util = require('util');
const marked = require('marked');

const readdirAsync = util.promisify(fs.readdir);
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const inputDir = './md';
const outputDir = './html';
const encoding = 'utf8';

async function main() {
  const files = await readdirAsync(inputDir);

  files.forEach(async (file) => {
    try {
      const data = await readFileAsync(path.join(inputDir, file));
      const md = marked(data.toString(encoding));

      const newFilename = `${path.basename(file, '.md')}.html`;
      const newPath = path.join(outputDir, newFilename);

      await writeFileAsync(newPath, md);
      console.log(`Wrote ${newPath}`);
    } catch (e) {
      console.error(e);
    }
  });
}

main().catch((err) => { console.error(err); });
