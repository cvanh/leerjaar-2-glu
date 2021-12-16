import { container } from "@xstyled/styled-components";
import Header from "../components/header/Header";
import Container from "../styled/container";
import Post  from "./index.styled.js"
// const mysql = require("@vlasky/mysql");

function Page({ data }) {
  return (
    <>
      <Header/>
      <Container>
        <Post.Field>
            {data.map((i) => {
              return (
                <Post.Card>
                  <Post.Tumbnail width="100" src={i.tumbnail}/>
                  <div>{i.id}</div>
                  <div>{i.title}</div>
                </Post.Card>
              );
            })}
            </Post.Field>
      </Container>
    </>
  );
}
Page.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/crud/GetPosts");
  const json = await res.json();
  console.log(json);
  return { data: json };
};

export default Page;
