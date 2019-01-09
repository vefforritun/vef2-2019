/*
Keyrt með:
node 06.hrtime.js

Skilar hversu lengi forrit sem bíður í 1 sek
keyrði, t.d.
Took 1005916149 nanoseconds
Took 1005.916149 milliseconds
Took 1.005916149 seconds

Það tekur alltaf einhvern tíma að keyra forrit
*/

const time = process.hrtime();
setTimeout(() => {
  // skilar fylki: [seconds, nanoseconds]
  const diff = process.hrtime(time);
  const elapsed = diff[0] * 1e9 + diff[1];
  const elapsedMs = elapsed / 1e6;
  const elapsedS = elapsed / 1e9;

  console.log(`Took ${elapsed} nanoseconds`);
  console.log(`Took ${elapsedMs} milliseconds`);
  console.log(`Took ${elapsedS} seconds`);
}, 1000);
