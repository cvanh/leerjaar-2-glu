import { container } from "@xstyled/styled-components";
import Link from "next/link";
import Header from "../components/header/Header";
import Container from "../styled/container";
import Post from "../styled/home.styled.js";

function Page({ data }) {
  let PostCount = 0; //
  return (
    <>
      <Header />
      <Container>
        <Post.Field>
          {data.map((i) => {
            PostCount++;
            if (PostCount === 1) {
              // this is the first card so it will be extra big
              return (
                <Link href={`/post/${i.id}`}>
                  <Post.CardBig key={i.id} href={`/post/${i.id}`}>
                    <Post.Tumbnail src={i.tumbnail} />
                    <div key={i.id}>{i.id}</div>
                    <div id={i.title}>{i.title}</div>
                  </Post.CardBig>
                </Link>
              );
            } else {
              return (
                <Link href={`/post/${i.id}`}>
                  <Post.Card key={i.id} href={`/post/${i.id}`}>
                    <Post.Tumbnail src={i.tumbnail} />
                    <div>{i.id}</div>
                    <div>{i.title}</div>
                  </Post.Card>
                </Link>
              );
            }
          })}
        </Post.Field>
      </Container>
    </>
  );
}
Page.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/crud/GetPosts");
  const json = await res.json();
  return { data: json };
};

export default Page;
