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

router.post("/AuthGetUserToken", jsonParser, async (req, res) => {
  console.log(req.body);
  await conn.query(
    `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}' LIMIT 1`,
    (error, results, fields) => {
      if (results.length === 0) { // result is a array and if it array is empty it is length is 0
        // nothing found sending http code 204 for no content
        res.status(204).send('error');
      } else {
        // found something
        res.status(200).send(results[0].token);
      }
    }
  );
});
module.exports = router;
