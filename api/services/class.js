const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get() {
  const rows = await db.query(
    `SELECT * FROM class`
  );
  const data = helper.emptyOrRows(rows);

  return data;
  
}

async function create(name,description,category) {
  const result = await db.query(
    'INSERT INTO class(name,description,category) VALUES (?,?,?)', [name,description,category]
  );

  let message = 'Error creating class.';

  if (result.affectedRows) {
    message = 'class created succesfully.';
  }

  return message;
}

async function update(id, name,description) {
  const result = await db.query(
    'UPDATE class SET name=? ,description=?, category=? WHERE id=?', [name,description,category,id]
  );

  let message = 'Error updating class.';

  if (result.affectedRows) {
    message = 'class updated succesfully.';
  }

  return message;
}

async function remove(id) {
  const result = await db.query(
    'DELETE FROM class WHERE id=?', [id]
  );

  let message = 'Error deleting class.';

  if (result.affectedRows) {
    message = 'class deleted succesfully.';
  }

  return message;
}

module.exports = {
  get,
  create,
  update,
  remove
}
