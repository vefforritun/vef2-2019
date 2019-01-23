const { Client } = require('pg');

const client = new Client({
  user: '',
  host: 'localhost',
  database: 'examples-2019',
  password: '',
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
