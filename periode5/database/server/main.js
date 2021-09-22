const express = require("express");
require("dotenv").config();
const app = express();
const {
    DB_find,
    db_insert,
    db_find,
    db_update,
    db_findone
} = require('./utils/database')
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({
    extended: true,
});
var jsonParser = bodyParser.json();

// add a book to the database
app.post("/addbook", urlencodedParser, async (req, res) => {

    console.log('adding book')
    console.log(req.body)
    // await db_insert('books', req.body)
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).send('<script>window.history.back();</script>')
});

app.get("/getbookdata/:value", jsonParser, async (req, res) => {
    console.log('get book data')
    // find the book 
    const response = await db_findone('books', {
        "isbn13": parseInt(req.params.value)
    })
    // removes the _id from the object
    delete response._id
    // debugging
    console.log(response)
    // sets the correct header otherwise fetch doesnt work
    res.header('Access-Control-Allow-Origin', '*')
    // sends the status so fetch doesnt complain 
    res.status(200).send(response)
});

// edit a book, you need to run gat data
app.get("/editbook", async (req, res) => {
    console.log('edit book')
    res.header('Access-Control-Allow-Origin', '*')
});
app.get("/borrow/:value", async (req, res) => {
    console.log(`borrow book ${req.params.IdOrIsbn} and the value ${req.params.value}`)
    res.header('Access-Control-Allow-Origin', '*')
});
app.post("/return/:value", jsonParser, async (req, res) => {
    console.log('return book')
    await db_update('books',{"borrow":req.params.value},{"borrow":true})
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).send()
});

// creates a http server with express for the REST part of the api
const server = app.listen(8082, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("express server started at: http://%s:%s", host, port);
});

