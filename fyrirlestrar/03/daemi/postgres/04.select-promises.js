const { Client } = require('pg');

const connectionString = 'postgres://:@localhost/examples-2019';

const client = new Client({
  connectionString,
});
client.connect();

client.query('SELECT * FROM people')
  .then((res) => {
    console.log(res.rows);
    client.end();
  })
  .catch((err) => {
    console.error(err);
    client.end();
  });
