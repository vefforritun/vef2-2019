const { Client } = require('pg');

const connectionString = 'postgres://:@localhost/examples-2019';

const client = new Client({
  connectionString,
});
client.connect();

client.query('SELECT * FROM people', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.rows);
  client.end();
});
