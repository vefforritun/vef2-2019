const { Client } = require('pg');

const connectionString = 'postgres://:@localhost/examples-2019';

const client = new Client({
  connectionString,
});
client.connect();

async function select() {
  try {
    const res = await client.query('SELECT * FROM people');
    console.log(res.rows);
  } catch (e) {
    console.error('Error selecting', e);
  }

  await client.end();
}

select().catch(e => console.error(e));
