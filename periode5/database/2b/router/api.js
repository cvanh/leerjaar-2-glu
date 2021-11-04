const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const NodeRSA = require("node-rsa");
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

router.get("/read/:id", jsonParser, async (req, res) => {
  await authcheck(req, res, () => {
    conn.query(
      "SELECT * FROM `product` WHERE id = " + parseInt(req.params.id),
      (error, results, fields) => {
        console.log(results);
        if (results.length === 0) {
          // result is a array and if it array is empty it is length is 0
          // nothing found sending http code 204 for no content
          res.status(204).send(results);
        } else {
          // found something
          res.status(200).send(results);
        }
      }
    );
  });
});

/**
 * @description add a product into the database
 */
router.post("/add", jsonParser, async (req, res) => {
  console.log(req.body);
  conn.query(
    `INSERT INTO product (category_id, naam, beschrijving, prijs, toegevoegd_op, gewijzigd_op) VALUES ( '${req.body.category_id}', '${req.body.naam}', '${req.body.beschrijving}', '${req.body.prijs}', '${req.body.toegevoegd_op}', '${req.body.gewijzigd_op}')`
  );
  res.status(200).send();
});

/**
 * @description updates a field based on: id, row and the new value
 * @ussage in the post request body send: {"id": TheID, "row":Row, "value": Value }
 */
router.post("/update", jsonParser, async (req, res) => {
  console.log(req.body);
  conn.query(
    `UPDATE product SET ${req.body.row} = '${req.body.value}' WHERE id = ${req.body.id}; `
  );
  res.status(200).send();
});

router.get("/delete/:table/:id", jsonParser, async (req, res) => {
  console.log(
    `deleting row with id: ${req.params.id} from the table: ${req.params.table}`
  );
  conn.query(`DELETE FROM ${req.params.table} WHERE id = ${req.params.id}`);
});
module.exports = router;

