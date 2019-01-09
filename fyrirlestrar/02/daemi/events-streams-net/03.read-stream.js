/*
Keyrt með:
node 03.read-stream.js

Keyrt eftir 02.write.stream.js
Les huge.txt í gegnum straum, chunk fyrir chunk. Lætur vita af fjölda chunks
eftir að allt skjal er lesið.
*/

const fs = require('fs');

// lesum skrá gegnum straum
const readStream = fs.createReadStream('huge.txt');

const chunks = [];

readStream.on('data', (chunk) => {
  console.log('chunk');
  chunks.push(chunk);
});

readStream.on('close', () => {
  console.log(`file read, ${chunks.length} chunks`);
});
