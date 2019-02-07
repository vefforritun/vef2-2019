/* Notast með 04.passport.js */

const bcrypt = require('bcrypt');

const records = [
  {
    id: 1,
    username: 'admin',

    // 123
    password: '$2a$11$pgj3.zySyFOvIQEpD7W6Aund1Tw.BFarXxgLJxLbrzIv/4Nteisii',
    admin: true,
  },
  {
    id: 2,
    username: 'oli',
    password: '$2a$11$pgj3.zySyFOvIQEpD7W6Aund1Tw.BFarXxgLJxLbrzIv/4Nteisii',
    admin: false,
  },
];

async function comparePasswords(password, user) {
  const ok = await bcrypt.compare(password, user.password);

  if (ok) {
    return user;
  }

  return false;
}

function findByUsername(username) {
  const found = records.find(u => u.username === username);

  if (found) {
    return Promise.resolve(found);
  }

  return Promise.resolve(null);
}

function findById(id) {
  const found = records.find(u => u.id === id);

  if (found) {
    return Promise.resolve(found);
  }

  return Promise.resolve(null);
}

module.exports = {
  comparePasswords,
  findByUsername,
  findById,
};
