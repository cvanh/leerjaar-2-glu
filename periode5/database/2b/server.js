const express = require("express");
const app = express();
var mysql = require("@vlasky/mysql");
require("dotenv").config();
//based on https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
var bodyParser = require("body-parser");
const { Router } = require("express");
const authcheck = require("./utils/authcheck.js");
var urlencodedParser = bodyParser.urlencoded({
  extended: true,
});
var jsonParser = bodyParser.json();

var conn = mysql.createConnection({
  host: process.env.host, // ip of mysql server
  port: process.env.port, //port of mysql
  user: process.env.user, // username
  password: process.env.password,
  database: process.env.db, 
});
conn.connect();

conn.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

app.get("/read/:id",jsonParser, async (req, res) => {
  await authcheck(req,res,()=>{
    conn.query(
      "SELECT * FROM `product` WHERE id = " + parseInt(req.params.id),
      (error, results, fields) => {
        console.log(results);
        if (results.length === 0) { // result is a array and if it array is empty it is length is 0
          // nothing found sending http code 204 for no content
          res.status(204).send(results);
        } else {
          // found something
          res.status(200).send(results);
        }
      }
    );
  })
});

app.post("/add", jsonParser, async (req, res) => {
  console.log(req.body);
  conn.query(`INSERT INTO product (category_id, naam, beschrijving, prijs, toegevoegd_op, gewijzigd_op) VALUES ( '${req.body.category_id}', '${req.body.naam}', '${req.body.beschrijving}', '${req.body.prijs}', '${req.body.toegevoegd_op}', '${req.body.gewijzigd_op}')`);
  res.status(200).send();
});

/**
 * @description updates a field based on: id, row and the new value
 * @ussage in the post request body send: {"id": TheID, "row":Row, "value": Value }
 */
app.post("/update", jsonParser, async (req, res) => {
  console.log(req.body);
  conn.query(
    `UPDATE product SET ${req.body.row} = '${req.body.value}' WHERE id = ${req.body.id}; `
  );
  res.status(200).send();
});

app.get("/delete/:table/:id", jsonParser, async (req, res) => {
  console.log(
    `deleting row with id: ${req.params.id} from the table: ${req.params.table}`
  );
  conn.query(
    `DELETE FROM ${req.params.table} WHERE id = ${req.params.id}`);
});
app.use("/auth",require("./router/auth.js"))

const server = app.listen(8082, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("express server started at: http://%s:%s", host, port);
});
