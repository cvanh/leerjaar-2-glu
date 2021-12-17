import Head from "./Head.styled";

function Header() {
  return (
    <Head.Header>
      <div>a</div>
      <Head.Links>
        <Head.LinkBox href="/">home</Head.LinkBox>
        <Head.LinkBox href="/contact/">contact</Head.LinkBox>
        <Head.LinkBox href="/admin/">login</Head.LinkBox>
      </Head.Links>
    </Head.Header>
  );
}
export default Header;
