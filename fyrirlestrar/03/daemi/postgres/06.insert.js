const { Client } = require('pg');

const connectionString = 'postgres://:@localhost/examples-2019';

const client = new Client({
  connectionString,
});
client.connect();

const query = 'INSERT INTO people(name, text) VALUES($1, $2) RETURNING *';
const values = ['Mr. Foo', 'Foo!'];

client.query(query, values, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.rows);
  client.end();
});
