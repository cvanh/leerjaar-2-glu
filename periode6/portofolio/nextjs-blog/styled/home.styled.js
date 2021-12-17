import styled from "styled-components";

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  height:200px;
`;
// const Card = styled.div`
//   overflow: hidden;
//   border: 1px black solid;
//   margin: 5px;
//   position: relative;
//   display: inline-block;
//   background-color: gray;
//   height:200px;
//   width: 25%;
// `;

const CardBig = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const Tumbnail = styled.img`
  width: 100%;
  height: 60%;
`;

const Field = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  background-color: #2196f3;
  padding: 10px; ;
`;

const Post = {
  Field,
  Card,
  Tumbnail,
  CardBig,
};
export default Post;
