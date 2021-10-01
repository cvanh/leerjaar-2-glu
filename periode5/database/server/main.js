const express = require("express");
require("dotenv").config();
const app = express();
const {
    DB_find,
    db_insert,
    db_find,
    db_update,
    db_findone,
    DB_replaceOne
} = require('./utils/database')
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({
    extended: true,
});
var jsonParser = bodyParser.json();
const {usercheck} = require("./utils/usercheck")

app.use("/users/", require("./routes/user.js"));

app.use("/books/", require("./routes/books.js"));



// creates a http server with express for the REST part of the api
const server = app.listen(8082, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("express server started at: http://%s:%s", host, port);
});

