import { container } from "@xstyled/styled-components";
import Header from "../components/header/Header";
import Post  from "./index.styled.js"
// const mysql = require("@vlasky/mysql");

function Page({ stars }) {
  return (
    <>
      {/* <Header/> */}
      <container>
        <div>
          <div>
            {stars.map((i) => {
              return (
                <Post.Card>
                  <img src={i.tumbnail}></img>
                  <div>{i.id}</div>
                  <div>{i.title}</div>
                </Post.Card>
              );
            })}
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
  return { stars: json };
};

export default Page;
