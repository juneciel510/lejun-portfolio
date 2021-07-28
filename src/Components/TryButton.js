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
    padding: 0.3rem 1rem;
    color: white;
    background-color: var(--primary-color);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      background-color: #519ced;
    }
  }
  a.active {
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: white;
    background-color: var(--primary-color);
    border-radius: 10px;
  }
`;
export default TryButton;
