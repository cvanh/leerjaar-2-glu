const express = require("express");
const app = express();
let Mysqli = require('mysqli')


//based on https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({
  extended: true,
});
var jsonParser = bodyParser.json();


let conn = new Mysqli({
  host: 'localhost', // IP/domain  
  post: 3306, //port, default 3306  
  user: 'root', // username
  passwd: '123456', // password
  charset: '', // CHARSET of database, default to utf8 【optional】
  db: 'apiopdracht' // the default database name  【optional】
})
let db = conn.emit()

app.get("/read/:id", jsonParser, async (req, res) => {
  const result = await db.query("SELECT * FROM `product` WHERE id = " + parseInt(req.params.id))
  res.status(200).send(result)
});

app.post("/add", jsonParser, async (req, res) => {
  console.log(req.body);
  const query = 
  console.log(query);
  const result = db.query(`INSERT INTO "product" (category_id, naam, beschrijving, prijs, toegevoegd_op, gewijzigd_op)
  VALUES ( '${req.body.category_id}', '${req.body.naam}', '${req.body.beschrijving}', '${req.body.prijs}', '${req.body.toegevoegd_op}', '${req.body.gewijzigd_op}')
 `)
  res.status(200).send(result)
});

const server = app.listen(8082, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("express server started at: http://%s:%s", host, port);
});
