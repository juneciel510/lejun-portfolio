import React from "react";
import styled from "styled-components";
import img from "../img/sidebar1.jpg";

const BackgroundClipText = ({ text }) => {
  return (
    <BackgroundClipTextStyled>
      <h1>{text}</h1>
      <img src={img} alt="" />
    </BackgroundClipTextStyled>
  );
};

const BackgroundClipTextStyled = styled.div`
  h1 {
    font-size: 5rem;
    /* background-image: url(../img/sidebar1.jpg); */
    background-image: url(img);
    /* --webkit-background-clip: text;
    background-clip: text;
    color: transparent; */
  }
`;
export default BackgroundClipText;
