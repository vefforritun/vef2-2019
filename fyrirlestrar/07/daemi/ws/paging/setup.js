require('dotenv').config();

const fs = require('fs');
const util = require('util');
const faker = require('faker');

const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL;

const readFileAsync = util.promisify(fs.readFile);

const schemaFile = './schema.sql';

async function query(q, values = []) {
  const client = new Client({ connectionString });

  await client.connect();

  try {
    const result = await client.query(q, values);

    const { rows } = result;
    return rows;
  } catch (err) {
    console.error('Error running query');
    throw err;
  } finally {
    await client.end();
  }
}

async function mock(n) {
  for (let i = 0; i < n; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const catchPhrase = faker.company.catchPhrase();

    const q = `
      INSERT INTO users (first_name, last_name, catch_phrase)
      VALUES ($1, $2, $3)`;

    await query(q, [firstName, lastName, catchPhrase]);
  }
}

async function create() {
  const data = await readFileAsync(schemaFile);

  await query(data.toString('utf-8'));

  console.info('Schema created');

  await mock(100);

  console.info('Mock data inserted');
}

create().catch((err) => {
  console.error('Error creating schema', err);
});
