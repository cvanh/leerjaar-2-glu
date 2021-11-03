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

app.use("/auth",require("./router/auth.js"))
app.use("/api2/product",require("./router/api.js"))


const server = app.listen(8082, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("express server started at: http://%s:%s", host, port);
});
