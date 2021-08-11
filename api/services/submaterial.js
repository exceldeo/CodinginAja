const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get() {
  const rows = await db.query(
    `SELECT * FROM submaterial`
  );
  const data = helper.emptyOrRows(rows);

  return data;
  
}

async function create(title,content,materialId) {
  const result = await db.query(
    'INSERT INTO submaterial (title,content,materialId) VALUES (?,?,?)', [title,content,materialId]
  );

  let message = 'Error creating submaterial.';

  if (result.affectedRows) {
    message = 'submaterial created succesfully.';
  }

  return message;
}

async function update(id, title,content,materialId) {
  const result = await db.query(
    'UPDATE submaterial SET title=? ,content=?,materialId=? WHERE id=?', [title,content,materialId, id]
  );

  let message = 'Error updating submaterial.';

  if (result.affectedRows) {
    message = 'submaterial updated succesfully.';
  }

  return message;
}

async function remove(id) {
  const result = await db.query(
    'DELETE FROM submaterial WHERE id=?', [id]
  );

  let message = 'Error deleting submaterial.';

  if (result.affectedRows) {
    message = 'submaterial deleted succesfully.';
  }

  return message;
}

module.exports = {
  get,
  create,
  update,
  remove
}
