const mysql2 = require('mysql2/promise');

// const connection = mysql2.createConnection({
//   host: 'localhost',
//   user: 'ppsconl2_admin',
//   password: 'Cruzher!23',
//   database: 'ppsconl2_sys_crud',
// });

const connection = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sdd_crud',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

connection.on('error', (err) => {
  console.error('MySQL connection error:', err);
});

module.exports = connection;


  // // export const connection = await mysql2.createConnection({
  // //   host: 'localhost',
  // //   user: 'root',
  // //   password: 'admin',
  // //   database: 'sdd_crud',
  // // });