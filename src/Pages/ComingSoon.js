import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";

const ComingSoon = () => {
  return (
    <ComingSoonStyled>
      <Particle />
      <div className="typography">
        <h1>Coming Soon...</h1>
      </div>
    </ComingSoonStyled>
  );
};
const ComingSoonStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 75%;
    h1 {
      color: var(--primary-color);
    }
  }
`;
export default ComingSoon;
