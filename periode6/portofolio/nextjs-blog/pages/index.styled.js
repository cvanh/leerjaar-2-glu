import styled from "styled-components";

const Card = styled.div`
  border: 1px black solid; 
  margin: 5px; 
  position: relative;
  display: inline-block;
  background-color: gray;
  height: 50px;
  width: 15%;
`;

const Tumbnail = styled.img`
  width: 100%;
`;

const Field = styled.div`
width:70%;
background-color:blue;
`

const Post = {
  Field,
  Card,
  Tumbnail,
};
export default Post;
