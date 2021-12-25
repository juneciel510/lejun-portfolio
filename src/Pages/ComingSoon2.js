import React from "react";
import styled from "styled-components";
import BackgroundClipText from "../Components/BackgroundClipText";
import GitHub from "@material-ui/icons/GitHub";
import Pinterest from "@material-ui/icons/Pinterest";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const ComingSoon2 = () => {
  return (
    <ComingSoon2Styled>
      <h1>Coming Soon...</h1>
    </ComingSoon2Styled>
  );
};

const ComingSoon2Styled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-family: "Raleway", sans-serif;
    font-weight: 1000;
    font-size: 5rem;
    background-image: url("https://i.gifer.com/fxVE.gif");
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export default ComingSoon2;
