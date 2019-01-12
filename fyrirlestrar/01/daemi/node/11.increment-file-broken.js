const fs = require('fs');

let num;

function addOne() {
  // number.txt inniheldur "1"
  fs.readFile('./num.txt', (err, data) => {
    num = Number.parseInt(data, 10);
    num += 1;
  });
}

addOne();

console.log(num);
