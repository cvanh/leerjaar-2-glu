import styled from "styled-components";

const Card = styled.div`
  border: 1px black solid;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  overflow: hidden;
  ::selection {
    color: none;
    background: none;
}
`;

const CardBig = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  grid-column-start: 1;
  grid-column-end: 3;
  overflow: hidden;
  ::selection {
    color: none;
    background: none;
}
`;

const Tumbnail = styled.img`
  margin-top: -20px;
  width: 100%;
  height: 60%;
`;

const Field = styled.div`
  // this is where all the post cards are stored
  width: 70%;
  display: grid;
  grid-template-columns: 25% 25% 25%;
  grid-gap: 10px;
  padding: 10px; ;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Post = {
  Field,
  Card,
  Tumbnail,
  CardBig,
};
export default Post;
