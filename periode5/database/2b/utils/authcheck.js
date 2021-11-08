const mysql = require("@vlasky/mysql");
require("dotenv").config();
var conn = mysql.createConnection({
  host: process.env.host, // ip of mysql server
  port: process.env.port, //port of mysql
  user: process.env.user, // username
  password: process.env.password,
  database: process.env.db,
});
conn.connect();
const NodeRSA = require('node-rsa');
const rsakey = `-----BEGIN RSA PRIVATE KEY-----
MIIBOQIBAAJAZC9NchDx6jVzFXOEZSr4ovkdrIQKREoPFR+/nFRgbVf22j09teEq
Kv9kQCotJ0kyIJKF3SR/DF3TTQaU8swn3QIDAQABAkA4bGOjsGNu0reEB1EzYSYz
MzZBKQRXPZaNARp7QxIjwkhjBFNYawfVyjePKrIdn8Hqe3jDmapgZUHYe3MdRBPB
AiEApjGPNDWGK6t/tDKRgLzf1PaMxOV/dBJ/1NLaUnLCFxUCIQCaUmTHXtNCS/AQ
3fzDDUdXEqcySm1j6ARY6GpL2Dn/qQIhAIQSJFx4IIy5uD2KZijpb/M8jze1raif
PujxO0CEJAvVAiBcVDNrfPZUUe6diNLzN/yYwdY6poDwJx6Cuvrtyb5ZkQIgUcOj
aqK5li0Cvy4F0Vww0G9YiWqbuBhY4iPk9tWQh+g=
-----END RSA PRIVATE KEY-----`
console.log(rsakey);
const key = new NodeRSA(rsakey);

/**
 * is user authenticated?
 * @param {object} req the express request
 * @param {callback} callback the function that will be excuted when the token is authenticated
 */
async function authcheck(req,res, callback) {
  const DecryptedToken = key.decrypt(req.headers["token"], 'utf8');
  console.log(DecryptedToken);
  await conn.query( // the query looks for a user with the matching token
    `SELECT * FROM users WHERE token = '${DecryptedToken}'`,
    (error, results, fields) => {
      console.log(results);
      if (results.length == 1) {
        // user is authenticated so the user has privilages 
        console.log('uhg')
        callback();
      } else {
        // the user doesnt have privilages so it
        res.status(300).send()
        console.log("no valid user");
      }
    }
  );
}
module.exports = authcheck;