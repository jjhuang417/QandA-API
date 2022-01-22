const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: '172.31.17.217',
  database: 'postgres',
  password: 'Chihwei417!',
  port: 5432,
})

pool.connect()
  .then(() => console.log('Connected to PostgreSQL DB with Pool'))
  .catch((err) => console.log(err));

module.exports = pool;