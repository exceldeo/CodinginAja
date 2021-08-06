const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function get() {
  const rows = await db.query(
    `SELECT * FROM kelas`
  );
  const data = helper.emptyOrRows(rows);

  return data;
  
}

// async function getMultiple(page = 1) {
//   const offset = helper.getOffset(page, config.listPerPage);
//   const rows = await db.query(
//     `SELECT id, name FROM tasks LIMIT ?,?`, 
//     [offset, config.listPerPage]
//   );
//   const data = helper.emptyOrRows(rows);
//   const meta = {page};

//   return {
//     data,
//     meta
//   }
// }

// async function create(name) {
//   const result = await db.query(
//     'INSERT INTO tasks(name) VALUES (?)', [name]
//   );

//   let message = 'Error creating task.';

//   if (result.affectedRows) {
//     message = 'Task created succesfully.';
//   }

//   return message;
// }

// async function update(id, name) {
//   const result = await db.query(
//     'UPDATE tasks SET name=? WHERE id=?', [name, id]
//   );

//   let message = 'Error updating task.';

//   if (result.affectedRows) {
//     message = 'Task updated succesfully.';
//   }

//   return message;
// }

// async function remove(id) {
//   const result = await db.query(
//     'DELETE FROM tasks WHERE id=?', [id]
//   );

//   let message = 'Error deleting task.';

//   if (result.affectedRows) {
//     message = 'Task deleted succesfully.';
//   }

//   return message;
// }

module.exports = {
  get,
  // getMultiple,
  // create,
  // update,
  // remove
}
