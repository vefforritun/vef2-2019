/*
Keyrt með:
node 03.async-await.js

data.txt verður að vera til, annars er villa
gripin með try catch, t.d.
{
  Error: ENOENT: no such file or directory, open 'data.txt'
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: 'data.txt'
}

annars er beðið eftir að gögn séu lesin, þau sett í data og prentuð út:
Halló, heimur!

Ef villa á sér stað _innan_ main, mun sú villa vera gripin af `catch` sem sett
er eftir kalli í seinustu línu.

Ef sú lína er ekki til staðar mun UnhandledPromiseRejectionWarning vera kastað
af Node því villa átti sér stað í Promise sem ekki hafði `catch`.

Hægt að framkvæmda með því að fjarlægja frá og með .catch í seinustu línu og
setja villu í main, t.d. kalla í readFileAsyncs ekki readFileAsync
*/

const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

async function main() {
  let data = '';
  try {
    data = await readFileAsync('data.txt');
  } catch (e) {
    console.error('error', e);
  }
  console.log(data.toString('utf8'));
}

main().catch((err) => { console.error(err); });
