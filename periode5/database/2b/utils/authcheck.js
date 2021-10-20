const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

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
async function authcheck(req, callback) {
  await conn.query(
    `SELECT * FROM users WHERE token = '${req.headers["token"]}'`,
    (error, results, fields) => {
      console.log(results);
      if (results.length == 1) {
        // user is authenticated so no problems here
        console.log('uhg')
        callback();
      } else {
        console.log("no valid user");
      }
    }
  );
}
module.exports = authcheck;