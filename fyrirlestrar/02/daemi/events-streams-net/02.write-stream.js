/*
Keyrt með:
node 02.write-stream.js

Útbýr skrifanlegan stream í huge.txt og skrifar ca. 80MB af "halló heimur"
*/

const fs = require('fs');

const stream = fs.createWriteStream('huge.txt');

for (let i = 0; i < 6e6; i++) {
  stream.write('halló heimur ');
}
