import styled from "styled-components";
import LogoFoto from "../../public/logo.svg"

const Header = styled.header`
  // the container of the header
  width: 100%;
  height 20px;
  background-color: gray;
  display: inline-block;
  position: fixed;
  border-bottom: 1px black solid;
  `;

const Links = styled.div`
  float: right;
  display:inline;
`;



const LinkBox = styled.a`
`

// const Logo = styled.img`
//   background-image: url(${logo});
// `
const Logo = styled.img.attrs({
  src: `${LogoFoto}`
})`
width: 50px;
height: 30px;
`;


const Head = {
  Logo,
  LinkBox,
  Links,
  Header,
};

export default Head;
