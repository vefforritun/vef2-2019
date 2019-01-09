/*
Keyrt með:
node 01.promise.js
*/

function futureMessage(msg) {
  return new Promise((resolve, reject) => {
    if (msg === 'foo') reject(new Error('nope'));

    setTimeout(
      () => resolve(`${msg} from future!`),
      2000,
    );
  });
}
futureMessage('foo').catch(s => console.log(s));
// "nope" strax ásamt villuskilaboðum

futureMessage('Hi!').then(s => console.log(s));
// "Hi! from future!" eftir 2 sek
