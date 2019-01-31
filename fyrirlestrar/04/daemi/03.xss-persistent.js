/*
Keyrt með:
node 03.xss-persistent.js

Keyrir upp express þjón með formi á /
Upplýsingar eru vistaðar í gagnagrunn án þess að strengur sé hreinsaður m.t.t.
XSS (og annars!)
Á /data eru allar færslur úr grunni sýndar og þar með möguleiki á að sýna gögn
sem innihalda XSS.
*/

const { Client } = require('pg');
const express = require('express');
const xss = require('xss');

const connectionString = 'postgres://:@localhost/examples-2019';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h2>Senda inn gögn</h2>
    <form method="post" action="/post">
      <input type="text" name="data">
      <button>Senda</button>
    </form>
    <p><a href="/data">Skoða gögn</a></p>
  `);
});

async function insert(data) {
  const client = new Client({ connectionString });
  await client.connect();

  await client.query('INSERT INTO texts(text) VALUES($1)', [data]);

  await client.end();
}

async function select() {
  const client = new Client({ connectionString });
  await client.connect();

  const res = await client.query('SELECT * FROM texts');

  await client.end();
  return res.rows;
}

app.get('/data', async (req, res) => {
  const data = await select();

  // XSS möguleiki! nota xss() utanum data til að verjast
  res.send(`Gögn: ${data.map(i => i.text).join('<br>')}`);
});

app.post('/post', async (req, res) => {
  const { data } = req.body;

  // XSS möguleiki!
  await insert(data);

  res.send(`
    <p>Gögn vistuð!</p>
    <p><a href="/data">Skoða gögn</a></p>
  `);
});

app.post('/post-safe', async (req, res) => {
  const { data } = req.body;

  const safeData = xss(data);
  await insert(safeData);

  res.send(`
    <p>Gögn vistuð!</p>
    <p><a href="/data">Skoða gögn</a></p>
  `);
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
