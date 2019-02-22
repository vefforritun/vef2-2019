const xss = require('xss');
const { query } = require('./db');

async function list() {
  const result = await query('SELECT * FROM ITEMS');

  return result.rows;
}

function isEmpty(s) {
  return s == null && !s;
}

function validate(title, text) {
  const errors = [];

  if (!isEmpty(title)) {
    if (typeof title !== 'string' || title.length === 0) {
      errors.push({
        field: 'title',
        error: 'Title must be a non-empty string',
      });
    }
  }

  if (!isEmpty(text)) {
    if (typeof text !== 'string' || text.length === 0) {
      errors.push({
        field: 'text',
        error: 'Text must be a non-empty string',
      });
    }
  }

  return errors;
}

/**
 * Updates an item, either its title, text or both.
 *
 * @param {number} id Id of item to update
 * @param {object} item Item to update
 * @returns {object}
 */
async function update(id, item) {
  const result = await query('SELECT * FROM items where id = $1', [id]);

  if (result.rows.length === 0) {
    return {
      success: false,
      notFound: true,
      validation: [],
    };
  }

  const validationResult = validate(item.title, item.text);

  if (validationResult.length > 0) {
    return {
      success: false,
      notFound: false,
      validation: validationResult,
    };
  }

  const changedColumns = [
    !isEmpty(item.title) ? 'title' : null,
    !isEmpty(item.text) ? 'text' : null,
  ].filter(Boolean);

  const changedValues = [
    !isEmpty(item.title) ? xss(item.title) : null,
    !isEmpty(item.text) ? xss(item.text) : null,
  ].filter(Boolean);

  const updates = [id, ...changedValues];

  const updatedColumnsQuery =
    changedColumns
      .map((column, i) => `${column} = $${i + 2}`);

  console.log(updates);
  console.log(updatedColumnsQuery);

  const q = `
    UPDATE items
    SET ${updatedColumnsQuery.join(', ')}
    WHERE id = $1
    RETURNING id, title, text`;
  console.log(q);

  const updateResult = await query(q, updates);
  console.log(updateResult);
  return {
    success: true,
    item: updateResult.rows[0],
  };
}

module.exports = {
  list,
  update,
};
