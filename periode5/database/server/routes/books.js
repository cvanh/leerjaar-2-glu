const express = require("express");
const router = express.Router();
const {
    DB_find,
    db_insert,
    db_find,
    db_update,
    db_findone,
    DB_replaceOne
} = require('../utils/database')
var bodyParser = require("body-parser");
const {
    usercheck
} = require("../utils/usercheck");
var urlencodedParser = bodyParser.urlencoded({
    extended: true,
});
var jsonParser = bodyParser.json();

router.post("/addbook", urlencodedParser, async (req, res) => {
    console.log('a')
    if (await usercheck(req) === 0) {
        console.log('adding book')
        console.log(req.body)
        req.body.isbn13 = req.body.isbn13
        await db_insert('books', req.body)
        res.header('Access-Control-Allow-Origin', '*')
        res.status(200).send('<script>window.history.back();</script>')
    }
});
// add a book to the database
router.get("/getbookdata/:value", jsonParser, async (req, res) => {
    console.log('get book data')
    // find the book 
    const response = await db_findone('books', {
        "isbn13": req.params.value
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
router.post("/editbook", urlencodedParser, async (req, res) => {
    if (await usercheck(req) <= 2){
        console.log('edit book')

    // because req.body.isbn13 is a string we need to convert it to a interger
    req.body.isbn13 = req.body.isbn13

    // replaces the document 
    await DB_replaceOne('books', {
        "isbn13": req.body.isbn13
    }, req.body)
}
    // for the response, sends a extra header so fetch works and a http status code + a return to previous page
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).send('<script>window.history.back();</script>')
});
router.post("/borrow", urlencodedParser, async (req, res) => {
        console.log(req.body)

        await db_update('books', {
            "isbn13": req.body.isbn13
        }, {
            "borrow": {
                "date": Date.now(),
                "email": req.body.email,
                "borrow": true
            }
        })
        // for the response, sends a extra header so fetch works and a http status code + a return to previous page
    res.header('Access-Control-Allow-Origin', '*')
        res.status(200).send('<script>window.history.back();</script>')
});
router.post("/return", urlencodedParser, async (req, res) => {
        console.log('return book')
        await db_update('books', {
            "isbn13": req.body.isbn13
        }, {
            "borrow.borrow": false
        })
        res.header('Access-Control-Allow-Origin', '*')
        res.status(200).send()
});

module.exports = router;