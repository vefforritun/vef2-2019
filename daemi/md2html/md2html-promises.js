/*
Keyrt með:
node md2html-promises.js

þar sem til er mappa sem heitir `md/` sem inniheldur markdown skrár.

Þriðja útgáfa sem notar promises í staðinn fyrir callbacks.

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

/**
 * Lesa skrá og skilar promise sem inniheldur skráarnafn og gögn í hlut:
 * { file: 'skráarnafn', data: 'gögn úr skrá' }
 *
 * @param {string} file Skrá til að lesa
 * @returns {Promise} Skilar Promise sem resolve'ar þegar skrá er lesin.
 */
function read(file) {
  return new Promise((resolve, reject) => {
    readFileAsync(file)
      .then((data) => {
        resolve({ file, data: data.toString(encoding) });
      })
      .catch(err => reject(err));
  });
}

/**
 * Túlkar Markdown gögn yfir í HTML og skrifar í skrá.
 *
 * @param {string} filepath Slóð á skrá sem skal skrifa HTML gögn í
 * @param {string} content Markdown gögn
 * @returns {Promise} Skilar Promise sem resolve'ar þegar búið er að skrifa skrá
 */
function write(filepath, content) {
  const md = marked(content);

  // Þurfum ekki auka gögn hér, skilum promise
  return writeFileAsync(filepath, md, { encoding });
}

readdirAsync(inputDir)
  .then((files) => {
    // Hér lendum við í því að vilja senda *bæði*  filename og gögn í næsta
    // then(), þurfum að búa til promise sjálf sem wrapper bæði skrá og gögn
    // read() sér um það fyrir okkur og skilar promise
    const readPromises = files.map(file => read(path.join(inputDir, file)));

    // Bíðum eftir að búið sé að lesa *allar* skrár
    return Promise.all(readPromises);
  })
  .then((data) => {
    const writePromises = data.map((fileWithData) => {
      const newFilename = `${path.basename(fileWithData.file, '.md')}.html`;
      const newPath = path.join(outputDir, newFilename);


      return write(newPath, fileWithData.data);
    });

    // Bíðum eftir að búið sé að skrifa *allar* skrár
    return Promise.all(writePromises);
  })
  .then((files) => { console.log(`Wrote ${files.length} files`); })
  // Grípur *allar* villur sem koma upp að ofan
  .catch((err) => { console.error(err); });
