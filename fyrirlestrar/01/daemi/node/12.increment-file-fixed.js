const fs = require('fs');

let num;

function addOne(callback) {
  fs.readFile('num.txt', 'utf8', (err, data) => {
    num = Number.parseInt(data, 10);
    num += 1;
    callback(num);
  });
}

addOne((n) => {
  console.log(n);
});
