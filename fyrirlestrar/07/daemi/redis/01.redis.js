/*
Keyrt með:
node 01.redis.js

Setur "foo" lykil sem gildi "bar" sem rennur út eftir 2 sek í redis. Prentar út
niðurstöður eftir hverja aðgerð.
*/

const redis = require('redis');
const util = require('util');

const redisOptions = {
  url: 'redis://127.0.0.1:6379/0',
};

const client = redis.createClient(redisOptions);

const asyncGet = util.promisify(client.get).bind(client);
const asyncSet = util.promisify(client.set).bind(client);

async function call() {
  const set = await asyncSet('foo', 'bar', 'EX', 2);
  console.log('set = ', set);
  const get = await asyncGet('foo');
  console.log('get = ', get);

  // eftir 2 sek verðu lykill runninn út
  setTimeout(async () => {
    const getResult = await asyncGet('foo');
    console.log('get = ', getResult);
    client.quit();
  }, 2100);
}

call().catch((err) => { console.error(err); });
