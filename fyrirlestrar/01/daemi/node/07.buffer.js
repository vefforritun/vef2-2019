/*
Keyrt með:
node 07.buffer.js

Býr til fylki af 16-bita unsigned heiltölum með
5 gildum og túlkar síðan sem utf8

Skilar
<Buffer 48 00 41 00 4c 00 4c 00 4f 00>
HALLO

Hvert gildi tekur 16bita svo 72 verður 48 00 í hex
*/

const arr = new Uint16Array(5);

arr[0] = 72;
arr[1] = 65;
arr[2] = 76;
arr[3] = 76;
arr[4] = 79;

const buf = Buffer.from(arr.buffer);

console.log(buf);
console.log(buf.toString('utf8'));
