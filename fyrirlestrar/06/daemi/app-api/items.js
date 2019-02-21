const { query } = require('./db');

async function list() {
  const result = await query('SELECT * FROM ITEMS');

  return result.rows;
}

function update() {

}

module.exports = {
  list,
  update,
};
