/*
Keyrt með:
node 09.readfile.js

data.txt verður að vera til, annars fær callback
villu í `err`, t.d.
error {
  Error: ENOENT: no such file or directory, open 'data.txt'
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'data.txt'
}
annars er `data`  buffer með gögnum úr data.txt:
<Buffer 48 61 6c 6c c3 b3 2c 20 68 65 69 6d 75 72 21 0a>
*/

const fs = require('fs');

fs.readFile('datas.txt', (err, data) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log(data);
  }
});
