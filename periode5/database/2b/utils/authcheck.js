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


/**
 * is user authenticated?
 * @param {object} req the express request
 * @param {callback} callback the function that will be excuted when the token is authenticated
 */
async function authcheck(req,res, callback) {
  await conn.query( // the query looks for a user with the matching token
    `SELECT * FROM users WHERE token = '${req.headers["token"]}'`,
    (error, results, fields) => {
      console.log(results);
      if (results.length == 1) {
        // user is authenticated so the user has privilages 
        console.log('uhg')
        callback();
      } else {
        // the user doesnt have privilages so it
        res.status(300).send()
        console.log("no valid user");
      }
    }
  );
}
module.exports = authcheck;