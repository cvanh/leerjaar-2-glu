// const mysql = require("mysql");
require('dotenv').config()
// const connection = mysql.createConnection({
//   host: "83.162.165.175",
//   user: "cvanh",
//   password: "XJeuLU75Vp2EZbM",
//   database: "portofolio",
// });

// connection.connect();

// function DatabaseQuery(query) {
//   connection.query(query, (error, results, fields) => {
//     if (error) throw error;
//   });
// }

// // connection.end();

class Database {
  conn;
  constructor() {
    this.conn = this.CreateConnection;
  }
  CreateConnection() {
    const connection = mysql.createConnection({
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database,
    });
    return connection
  }

}



module.exports = class Database {
