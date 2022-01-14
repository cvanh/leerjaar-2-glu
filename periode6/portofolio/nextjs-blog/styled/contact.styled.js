import styled from "styled-components";

export const ContactForm = styled.form`
  padding-top: 65px;
  //
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  @media only screen and (max-width: 868px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  display: block;
  height: 20px;
  width: 25%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;

  button {
    height: 20px;
    width:20px;
    background: none;
    transition: none;
    &:hover {
      transition: color 0.3s;
      color: orange;
    }
    
  }
`;

export const Content = styled.textarea`
  resize: none;
  width: 25%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
`;
