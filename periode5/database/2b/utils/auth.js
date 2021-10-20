const mysql = require("@vlasky/mysql");
require("dotenv").config();
var conn = mysql.createConnection({
  host: process.env.host, // ip of mysql server
  port: process.env.port, //port of mysql
  user: process.env.user, // username
  password: process.env.password,
  database: process.env.db,
});
conn.connect();

function AuthGetUserToken(username, password) {
  console.log("verifying user");
  conn.query(
    `SELECT * FROM 'users' WHERE username = '${username}' AND password = '${password}' LIMIT 1`,
    (error, results, fields) => {
      console.log(results);
    }
  );
}
module.exports = AuthGetUserToken;
