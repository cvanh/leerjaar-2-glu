import { container } from "@xstyled/styled-components";
import Header from "../components/header/Header";
const mysql = require("mysql");

function Page() {
  return (
   <>
   {/* <Header/> */}
    <container>
    <div>
      {
        console.log(stars)
      }
    </div>
    </container>
   </>
  )
}
Page.getInitialProps = async (ctx) => {
  const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  });

  connection.connect();

  const data = connection.query('SELECT * FROM `posts` ', (error, results, fields) => {
    if (error) throw error;
  });
console.log(data)
  connection.end();
 
  return { stars: data }
}


export default Page;
