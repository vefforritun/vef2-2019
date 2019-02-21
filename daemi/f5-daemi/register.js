const express = require('express');
const { check, validationResult } = require('express-validator/check');

const { insert } = require('./db');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

const validation = [
  check('name').isLength({ min: 1 }).withMessage('Nafn má ekki vera tómt'),
];

const sanitazion = [

];

function form(req, res) {
  res.render('index', { name: '', errors: [] });
}

async function register(req, res) {
  const { body: { name } = {} } = req;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array();
    res.render('index', { name, errors: errorMessages });
  } else {
    try {
      await insert(name);
    } catch (e) {
      console.error('Gat ekki búið til nemenda', name, e);
      throw e;
    }
    res.render('thanks');
  }
}

router.get('/', form);
router.post('/register', validation, sanitazion, catchErrors(register));

module.exports = router;
