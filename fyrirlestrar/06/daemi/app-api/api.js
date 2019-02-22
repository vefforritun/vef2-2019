const express = require('express');

const {
  list,
  update,
} = require('./items');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function listRoute(req, res) {
  const items = await list();

  return res.json(items);
}

async function patchRoute(req, res) {
  const { id } = req.params;
  const { title, text } = req.body;

  const result = await update(id, { title, text });

  if (!result.success && result.notFound) {
    return res.status(404).json({ error: 'Item not found' });
  }

  if (!result.success && result.validation.length > 0) {
    return res.status(400).json(result.validation);
  }


  return res.status(200).json(result.item);
}


router.get('/', catchErrors(listRoute));
router.patch('/:id', catchErrors(patchRoute));

module.exports = router;
