/*
Keyrt með:
node 02.promisify.js

data.txt verður að vera til, annars grípur `catch`
villu , t.d.
{
  Error: ENOENT: no such file or directory, open 'data.txt'
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'data.txt'
}
annars er Promise uppfyllt og gögn skrifuð út sem strengur:
Halló, heimur!
*/

const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

readFileAsync('data.txt')
  .then((data) => {
    console.log(data.toString('utf8'));
  })
  .catch((err) => {
    console.error(err);
  });
