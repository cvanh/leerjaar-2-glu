import styled from "styled-components";
import React from 'react';

export const MainPhoto = styled.img`
    position: static;
    width: 45%;
    margin-top: 65px; // just so it isnt in the navbar 
    @media only screen and (max-width: 868px) {
        backgroud-color: gray;
        width: 100%;
    }
`

export const Article = styled.article`
    margin-left:auto;
    margin-right:auto;
    width:50%;
    @media only screen and (max-width: 868px) {
    width:100%;
    }
`

// const About = {
//     MainPhoto,
// }

// export default MainPhoto