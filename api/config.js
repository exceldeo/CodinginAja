const env = require('dotenv').config()

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'codinginaja',
  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
};

module.exports = config;
