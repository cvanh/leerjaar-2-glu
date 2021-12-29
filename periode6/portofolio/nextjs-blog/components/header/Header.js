import Head from "./Head.styled";
import LogoFoto from "../../public/logo.png";

function Header() {
  window.addEventListener("scroll",()=>{
    console.log('there is a scroll')
  })
  return (
    <Head.Header>
      <Head.Logo></Head.Logo>

      <Head.Links>
        <a href="/">
          <Head.LinkBox>home</Head.LinkBox>
        </a>
        <a href="/contact/">
          <Head.LinkBox>contact</Head.LinkBox>
        </a>
        <a href="/admin/">
          <Head.LinkBox>login</Head.LinkBox>
        </a>
      </Head.Links>
    </Head.Header>
  );
}
export default Header;
