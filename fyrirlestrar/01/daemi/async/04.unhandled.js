/*
Keyrt með:
node 04.unhandled.js

Bregðumst við unhandledRejection atburðinum og skráum að villa hafi komið upp.
*/

process.on('unhandledRejection', (reason, p) => {
  console.error(`Unhandled rejection of ${p}\nReason: ${reason}`);
});

async function main() {
  const data = await Promise.resolve(true);
  console.foo(data);
}

main();
