const express = require("express");
const app = express();
let Mysqli = require("mysqli");
require('dotenv').config()
//based on https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({
  extended: true,
});
var jsonParser = bodyParser.json();

let conn = new Mysqli({
  host: process.env.host, // ip of mysql server
  port: process.env.port, //port of mysql
  user: process.env.user, // username
  password: process.env.password, // password
  charset: process.env.charset, // charset of the table
  db: process.env.db, // the db
});
let db = conn.emit();

app.get("/read/:id", jsonParser, async (req, res) => {
  const result = await db.query(
    "SELECT * FROM `product` WHERE id = " + parseInt(req.params.id)
  );
  res.status(200).send(result);
});

app.post("/add", jsonParser, async (req, res) => {
  console.log(req.body);
  db.query(`INSERT INTO 'product' (category_id, naam, beschrijving, prijs, toegevoegd_op, gewijzigd_op)
  VALUES ( '${req.body.category_id}', '${req.body.naam}', '${req.body.beschrijving}', '${req.body.prijs}', '${req.body.toegevoegd_op}', '${req.body.gewijzigd_op}')
 `);
  res.status(200).send();
});

/** 
 * @description updates a field based on: id, row and the new value
 * @ussage in the post request body send: {"id": TheID, "row":Row, "value": Value }
 */
app.post("/update", jsonParser, async (req, res) => { // TODO test this
  console.log(req.body);
  db.query(`UPDATE 'product' SET '${req.body.row}' = '${req.body.value}' WHERE 'product'.'id' = ${req.body.id}; `);
  res.status(200).send();
});

app.get('/delete/:table/:id',jsonParser, async (req,res)=>{ // TODO test this
  console.log(`deleting row with id: ${req.params.id} from the table: ${req.params.table}`)
  db.query(`DELETE FROM '${req.params.table}' WHERE '${req.params.table}'.'id' = ${req.params.id}`);
  res.status(200).send();
})



const server = app.listen(8082, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("express server started at: http://%s:%s", host, port);
});

