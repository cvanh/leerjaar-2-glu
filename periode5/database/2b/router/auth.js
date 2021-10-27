const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const NodeRSA = require('node-rsa');
const rsakey = process.env.rsakey
const key = new NodeRSA({rsakey:512});

const mysql = require("@vlasky/mysql");
const CreateNewUUID = require("../utils/CreateNewUUID.js");
const authcheck = require("../utils/authcheck");
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
        const encrypted = key.encrypt(results[0].token, 'base64');
        res.status(200).send(encrypted);
      }
    }
  );
});
router.post("/adduser", jsonParser,async (req,res) =>{
  const NewUserToken = CreateNewUUID();
  await authcheck(req,res,()=>{
    conn.query(`INSERT INTO users (id, username, password, token, permission) VALUES (NULL, '${req.body.username}', '${req.body.password}', '${NewUserToken}', '0');`)
    res.send().status(200)
  })
})

module.exports = router;
