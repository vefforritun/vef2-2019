/*
Keyrt með:
node md2html-callback-refactored.js

þar sem til er mappa sem heitir `md/` sem inniheldur markdown skrár.

Önnur útgáfa sem notar callbacks til að lesa af disk. Refactorað með því að
draga út föll og færa fasta efst í skjal.
*/

const fs = require('fs');
const path = require('path');
const marked = require('marked');

const inputDir = './md';
const outputDir = './html';
const encoding = 'utf8';

/**
 * Les markdown skjal og skilar gögnum í callback.
 *
 * @param {string} file Slóð á skrá sem lesa á markdown gögn úr
 * @param {function} cb Callback sem fær Buffer úr markdown falli
 */
function read(file, cb) {
  fs.readFile(file, (err, data) => {
    if (err) console.error(err);

    cb(data.toString(encoding));
  });
}

/**
 * Túlkar Markdown gögn yfir í HTML og skrifar í skrá.
 *
 * @param {string} filepath Slóð á skrá sem skal skrifa HTML gögn í
 * @param {string} content Markdown gögn
 * @param {function} cb Callback sem kallað er í þegar búið er að skrifa
 */
function write(filepath, content, cb) {
  const md = marked(content.toString('utf8'));

  fs.writeFile(filepath, md, { encoding }, (err) => {
    if (err) console.error(err);
    cb();
  });
}

fs.readdir(inputDir, (err, files) => {
  if (err) console.error(err);

  files.forEach((filename) => {
    const newFilename = `${path.basename(filename, '.md')}.html`;
    const newPath = path.join(outputDir, newFilename);

    read(path.join(inputDir, filename), (data) => {
      write(newPath, data, () => {
        console.log(`Wrote ${newPath}`);
      });
    });
  });
});
