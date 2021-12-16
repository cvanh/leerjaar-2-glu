import { container } from "@xstyled/styled-components";
import Header from "../components/header/Header";
import Container from "../styled/container";
import Post  from "./index.styled.js"
// const mysql = require("@vlasky/mysql");

function Page({ stars }) {
  return (
    <>
      {/* <Header/> */}
      <Container>
        <div>
            {stars.map((i) => {
              return (
                <Post.Card>
                  <Post.Tumbnail src={i.tumbnail}></Post.Tumbnail>
                  <div>{i.id}</div>
                  <div>{i.title}</div>
                </Post.Card>
              );
            })}
        </div>
      </Container>
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
