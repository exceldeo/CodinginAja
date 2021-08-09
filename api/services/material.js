const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get() {
  const rows = await db.query(
    `SELECT * FROM material`
  );
  const data = helper.emptyOrRows(rows);

  return data;
  
}

async function create(title,description,classId) {
  const result = await db.query(
    'INSERT INTO material(title,description,classId) VALUES (?,?,?)', [title,description,classId]
  );

  let message = 'Error creating material.';

  if (result.affectedRows) {
    message = 'material created succesfully.';
  }

  return message;
}

async function update(id, title,description,classId) {
  const result = await db.query(
    'UPDATE material SET title=? ,description=?,classId=? WHERE id=?', [title,description,classId, id]
  );

  let message = 'Error updating material.';

  if (result.affectedRows) {
    message = 'material updated succesfully.';
  }

  return message;
}

async function remove(id) {
  const result = await db.query(
    'DELETE FROM material WHERE id=?', [id]
  );

  let message = 'Error deleting material.';

  if (result.affectedRows) {
    message = 'material deleted succesfully.';
  }

  return message;
}

module.exports = {
  get,
  create,
  update,
  remove
}
