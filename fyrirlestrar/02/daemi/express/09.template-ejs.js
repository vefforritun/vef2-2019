/*
Keyrt með:
node 09.template-ejs.js

Keyrir upp vef með express sem notar ejs template fyrir síður á / og /about
*/
const express = require('express');
const path = require('path');

const app = express();

// Þetta verður aðgengilegt gegnum `local.bar` í template
app.locals.foo = bar => `foo ${bar}!`;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // `title` verður aðgengilegt sem breyta í template
  res.render('index', { title: 'Forsíða' });
});

app.get('/about', (req, res) => {
  const staff = ['Jón', 'Gunna'];
  const extra = '<p><strong>Þessi síða er í vinnslu</strong></p>';

  // Getum sent eins mikið og við viljum af gögnum til template gegnum hlut
  res.render('about', { title: 'Um', staff, extra });
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
