import React from "react";
import styled from "styled-components";
const TryButton = ({ url }) => {
  return (
    <TryBtnStyled>
      <a href={url}>Try it Yourself »</a>
    </TryBtnStyled>
  );
};

const TryBtnStyled = styled.div`
  a {
    text-decoration: none;
    /* text-decoration: revert; */
    padding: 0.3rem 0.7rem;
    color: var(--font-light-color);
    /* background-color: var(--primary-color); */
    background: transparent;
    border-radius: 10px;
    border: 2px solid var(--primary-color);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      /* background-color: var(--primary-color); */
      color: var(--primary-color);
      box-shadow: 1.5px 1.5px 4px var(--primary-color),
        -1.5px -1.5px 4px var(--primary-color);
    }
  }
  a.active {
    text-decoration: none;
    padding: 0.3rem 0.7rem;
    color: white;
    background-color: var(--primary-color);
    border-radius: 10px;
  }
`;
export default TryButton;
