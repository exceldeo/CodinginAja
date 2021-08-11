const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const { Category } = require('../models')

async function get() {
  try {
    const category = await Category.findAll()

    return category
  } catch (err) {
    console.log(err)
    return { error: 'Something went wrong' }
  }
}

async function create(name_category,description) {
  const result = await db.query(
    'INSERT INTO categories (name_category,description) VALUES (?,?)', [name_category,description]
  );

  let message = 'Error creating categories.';

  if (result.affectedRows) {
    message = 'categories created succesfully.';
  }

  return message;
}

async function update(id, name_category,description) {
  const result = await db.query(
    'UPDATE categories SET name_category=? ,description=? WHERE id=?', [name_category,description, id]
  );

  let message = 'Error updating categories.';

  if (result.affectedRows) {
    message = 'categories updated succesfully.';
  }

  return message;
}

async function remove(id) {
  const result = await db.query(
    'DELETE FROM categories WHERE id=?', [id]
  );

  let message = 'Error deleting categories.';

  if (result.affectedRows) {
    message = 'categories deleted succesfully.';
  }

  return message;
}

module.exports = {
  get,
  create,
  update,
  remove
}
