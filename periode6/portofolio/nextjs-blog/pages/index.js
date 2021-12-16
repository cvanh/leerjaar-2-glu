import { container } from "@xstyled/styled-components";
import Header from "../components/header/Header";
const Post = require("./index.styled.js")
// const mysql = require("@vlasky/mysql");

function Page() {
  return (
   <>
   {/* <Header/> */}
    <container>
    <div>
      
    <div>
      <img src="./kaas">
    {console.log(stars)}
      </img>

    </div>

    </div>
    </container>
   </>
  )
}
Page.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/crud/GetPosts')
  const json = await res.json()
  return { stars: json }
}


export default Page;
