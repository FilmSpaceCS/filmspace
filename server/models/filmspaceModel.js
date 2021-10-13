const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params) =>{
    console.log('this was queried with', text, 'and the params', params) 
    return pool.query(text, params)
  },
};