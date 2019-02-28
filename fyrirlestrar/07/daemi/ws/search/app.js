require('dotenv').config();

const express = require('express');

const app = express();
const { Client } = require('pg');

const {
  PORT: port = 3000,
  DATABASE_URL: connectionString = '',
} = process.env;

async function select(search = '') {
  const client = new Client({
    connectionString,
  });

  await client.connect();

  try {
    const q = `
      SELECT * FROM users
      WHERE
        to_tsvector('english', catch_phrase) @@ plainto_tsquery('english', $1)
        OR
        to_tsvector('english', first_name) @@ plainto_tsquery('english', $1)
        OR
        to_tsvector('english', last_name) @@ plainto_tsquery('english', $1)
    `;

    const res = await client.query(q, [search]);

    return res.rows;
  } catch (e) {
    console.error('Error selecting', e);
  } finally {
    await client.end();
  }

  return [];
}

app.get('/', async (req, res) => {
  const { search } = req.query;

  const rows = await select(search);

  res.json(rows);
});

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}/`);
});
