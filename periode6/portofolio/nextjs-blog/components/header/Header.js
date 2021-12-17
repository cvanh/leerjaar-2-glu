import Head from "./Head.styled";
import Logo from "../../public/logo.png";


function Header() {
  return (
    <Head.Header>
      <Head.Logo src={Logo}></Head.Logo>
      <Head.Links>
        <Head.LinkBox href="/">home</Head.LinkBox>
        <Head.LinkBox href="/contact/">contact</Head.LinkBox>
        <Head.LinkBox href="/admin/">login</Head.LinkBox>
      </Head.Links>
    </Head.Header>
  );
}
export default Header;
