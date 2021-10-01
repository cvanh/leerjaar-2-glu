const express = require("express");
const {
    catchAsync
} = require("../utils/catchAsyncErrors");
const router = express.Router();
const {
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

// checks if user exists with a form submit
router.post("/auth/form", urlencodedParser, async (req, res) => {
    const result = await db_findone('users', {
        "token": parseInt(req.body.token)
    })
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).send(result)

})

// check if a user exist with a json request
router.post("/auth/json", jsonParser, async (req, res) => {
    console.log(req.body)
    const result = await db_findone('users', {
        "token": (parseInt)
    })
    console.log(result)
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).send(result)
})

// add a user
router.post("/auth/add", urlencodedParser, async (req, res) => {
    // check if user has superuser perms
    if (await usercheck(req) === 0) {
        console.log('a')
        await db_insert('users', {
            "token": parseInt(req.body.token),
            "permission": parseInt(req.body.permission),
            "UserCreationDate": new Date()
        })
        res.header('Access-Control-Allow-Origin', '*')
        res.status(200).send('things seems to checkout')
    } else {
        console.log('b')
        res.header('Access-Control-Allow-Origin', '*')
        res.status(418).send('oi piss off')
    }

})

module.exports = router;