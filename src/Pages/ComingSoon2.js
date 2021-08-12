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
      {/* <BackgroundClipText text={"Coming Soon..."} />; */}
    </ComingSoon2Styled>
  );
};

const ComingSoon2Styled = styled.div`
  /* background-image: url("../img/sidebar1.jpg"); */
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
    /* background-image: url("https://i.gifer.com/8VvO.gif"); */
    /* background-size: cover; */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    /* background-position: bottom right; */
    /* background-size: cover; */
  }
`;

export default ComingSoon2;
