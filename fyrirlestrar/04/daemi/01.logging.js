/*
Keyrt með:
node 01.logging.js

Setur upp morgan HTTP request middleware og Winston logging á nokkrum atriðum
sem eru skráð í app.log, debug.log og í console
*/

const express = require('express');
const morgan = require('morgan');
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: [
    new transports.File({ filename: 'app.log' }),
    new transports.File({ filename: 'debug.log', level: 'debug' }),
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple(),
      ),
    }),
  ],
});

logger.info('App started');

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  logger.debug('Sending hello world', {
    foo: 'bar',
  });
  res.send('hello, world!');
});

// dæmi um "audit logs", eitthvað sem skráir þegar breytingar á gögnum gerast
app.get('/create', (req, res) => {
  logger.info({
    action: 'create',
    id: 123,
    user: 'NN',
  });
  res.send('Bjó eitthvað til');
});

app.get('/delete', (req, res) => {
  logger.info({
    action: 'delete',
    id: 123,
    user: 'NN',
  });
  res.send('Eyddi einhverju');
});

app.get('/error', (req, res) => {
  try {
    throw new Error('Villa!');
  } catch (e) {
    logger.error(e);
  }
  res.send('villa');
});

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
