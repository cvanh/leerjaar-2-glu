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
  db: '' // the default database name  【optional】
})

app.get("/getmessage", jsonParser, async (req, res) => {

});

const server = app.listen(8082, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("express server started at: http://%s:%s", host, port);
});
