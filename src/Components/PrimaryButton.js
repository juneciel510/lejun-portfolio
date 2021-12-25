import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function PrimaryButton({ title }) {
  return (
    <PrimaryButtonStyled>
      <Link className="download" to="/resumePDF">
        {title}
      </Link>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.a`
  width: 11rem;
  background-color: var(--background-light-color-2);
  padding: 0.5rem;
  text-align: center;
  color: var(--primary-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  a {
    text-decoration: none;
  }

  &:hover {
    box-shadow: 2px 0px 4px var(--primary-color),
      -2px 0px 4px var(--primary-color), 0px -2px 4px var(--primary-color),
      0px 2px 4px var(--primary-color);
    color: var(--primary-color);
  }
`;
export default PrimaryButton;
