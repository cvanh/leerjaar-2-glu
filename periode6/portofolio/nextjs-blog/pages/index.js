import { container } from "@xstyled/styled-components";
import Header from "../components/header/Header";
const Post = require("./index.styled.js");
// const mysql = require("@vlasky/mysql");

function Page() {
  return (
    <>
      {/* <Header/> */}
      <container>
        <div>
          <div>

            {
            stars
            }
          </div>
        </div>
      </container>
    </>
  );
}
Page.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/crud/GetPosts");
  const json = await res.json();
  console.log(json);
  return { stars: '111111112d' };
};

export default Page;
