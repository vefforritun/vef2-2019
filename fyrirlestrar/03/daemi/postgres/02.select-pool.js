const { Pool } = require('pg');

const connectionString = 'postgres://:@localhost/examples-2019';

const pool = new Pool({
  connectionString,
});

pool.query('SELECT * FROM people', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.rows);
  pool.end();
});
