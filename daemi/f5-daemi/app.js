require('dotenv').config();

const path = require('path');
const express = require('express');
const register = require('./register');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(register);

/* todo aðrar stillingar á express appi */

function notFoundHandler(req, res, next) { // eslint-disable-line
  res.status(404).render('error', { title: '404', error: '404 fannst ekki' });
}

function errorHandler(error, req, res, next) { // eslint-disable-line
  console.error(error);
  res.status(500).render('error', { title: 'Villa', error });
}

app.use(notFoundHandler);
app.use(errorHandler);

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
