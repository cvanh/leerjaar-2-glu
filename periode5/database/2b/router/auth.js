const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const NodeRSA = require('node-rsa');
const rsakey = `-----BEGIN RSA PRIVATE KEY-----
MIIBOQIBAAJAZC9NchDx6jVzFXOEZSr4ovkdrIQKREoPFR+/nFRgbVf22j09teEq
Kv9kQCotJ0kyIJKF3SR/DF3TTQaU8swn3QIDAQABAkA4bGOjsGNu0reEB1EzYSYz
MzZBKQRXPZaNARp7QxIjwkhjBFNYawfVyjePKrIdn8Hqe3jDmapgZUHYe3MdRBPB
AiEApjGPNDWGK6t/tDKRgLzf1PaMxOV/dBJ/1NLaUnLCFxUCIQCaUmTHXtNCS/AQ
3fzDDUdXEqcySm1j6ARY6GpL2Dn/qQIhAIQSJFx4IIy5uD2KZijpb/M8jze1raif
PujxO0CEJAvVAiBcVDNrfPZUUe6diNLzN/yYwdY6poDwJx6Cuvrtyb5ZkQIgUcOj
aqK5li0Cvy4F0Vww0G9YiWqbuBhY4iPk9tWQh+g=
-----END RSA PRIVATE KEY-----`; // sue me bitches
const key = new NodeRSA(rsakey);

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
