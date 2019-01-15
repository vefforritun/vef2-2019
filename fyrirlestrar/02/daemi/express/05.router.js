/*
Keyrt með:
node 05.router-app.js

Skilgreinum routes fyrir express app skilgreint í 05.router-app.js
*/

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Foo!');
});

// Route sem inniheldur regexp og svarar fyrir /foo og /fooooo! o.s.fr
router.get(/foo.*$/, (req, res) => {
  res.send(`Þú ert á ${req.originalUrl}<br>url er ${req.url}`);
});

// Náum í gögn úr /bar route
// Ef við sleppum ? svarar þetta ekki fyrir /bar, aðeins /bar/x, /bar/foo o.sfr.
router.get('/bar/:data?', (req, res) => {
  res.send(`Data = ${req.params.data}`);
});

module.exports = router;
