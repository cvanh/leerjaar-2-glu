const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "83.162.165.175",
  user: "cvanh",
  password: "XJeuLU75Vp2EZbM",
  database: "portofolio",
});

connection.connect();

function DatabaseQuery(query) {
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
  });
}

// connection.end();



module.exports = DatabaseQuery