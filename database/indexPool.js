const { Pool } = require('pg');
const pool = new Pool({
  user: 'Soft',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
})

pool.connect()
  .then(() => console.log('Connected to PostgreSQL DB with Pool'))
  .catch((err) => console.log(err));

module.exports = pool;
