const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ence',
  database: 'carsdb'
});
module.exports = connection;
