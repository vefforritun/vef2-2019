/*
Keyrt með:
node 03.block.js

setTimeout keyrir ekki eftir 1s eins og við skilgreinum,
heldur eftir að ítrun hefur keyrt í 5s
*/

setTimeout(() => {
  console.log(`Timeout@${new Date().toString()}`);
}, 1000);

const d = new Date();
console.log(`Start@${d.toString()}`);

let i = 0;
const iterateUntil = d.getTime() + 5000;
while (new Date().getTime() < iterateUntil) {
  i += 1; // blokkar í 5s
}
console.log(`Exit@${new Date().toString()}`);
console.log(`${i} iterations`);
