/*
Keyrt með:
node 04.log.js > output.txt 2> error.txt
Pípar `stdout` í `output.txt` og `stderr` í `error.text`
*/

console.time('klukka');
console.log('halló heimur');
console.error('villa!');
console.timeEnd('klukka');
