require('dotenv').config();

const { query } = require('./db');

const connectionString = process.env.DATABASE_URL;

const schema = `
CREATE TABLE items (
  id serial primary key,
  title varchar(128) not null,
  text text
);
INSERT INTO items (title, text) VALUES ('færsla 1', 'texti í færslu 1');
INSERT INTO items (title, text) VALUES ('færsla 2', 'texti í færslu 2');
INSERT INTO items (title, text) VALUES ('færsla 3', 'texti í færslu 3');
INSERT INTO items (title, text) VALUES ('færsla 4', 'texti í færslu 4');
`;

async function main() {
  console.info(`Set upp gagnagrunn á ${connectionString}`);
  // droppa töflu ef til
  await query('DROP TABLE IF EXISTS items');
  console.info('Töflu eytt');

  // búa til töflur út frá skema
  try {
    await query(schema);
    console.info('Tafla búin til');
  } catch (e) {
    console.error('Villa við að búa til töflu:', e.message);
  }
}

main().catch((err) => {
  console.error(err);
});
