const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get() {
  const rows = await db.query(
    `SELECT * FROM course`
  );
  const data = helper.emptyOrRows(rows);

  return data;
  
}

async function create(name,description,category) {
  const result = await db.query(
    'INSERT INTO course (name,description,category) VALUES (?,?,?)', [name,description,category]
  );

  let message = 'Error creating course.';

  if (result.affectedRows) {
    message = 'course created succesfully.';
  }

  return message;
}

async function update(id, name,description) {
  const result = await db.query(
    'UPDATE course SET name=? ,description=?, category=? WHERE id=?', [name,description,category,id]
  );

  let message = 'Error updating course.';

  if (result.affectedRows) {
    message = 'course updated succesfully.';
  }

  return message;
}

async function remove(id) {
  const result = await db.query(
    'DELETE FROM course WHERE id=?', [id]
  );

  let message = 'Error deleting course.';

  if (result.affectedRows) {
    message = 'course deleted succesfully.';
  }

  return message;
}

module.exports = {
  get,
  create,
  update,
  remove
}
