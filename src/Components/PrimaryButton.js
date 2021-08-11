import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function PrimaryButton({ title }) {
  return (
    <PrimaryButtonStyled>
      <Link to="/resumePDF">{title}</Link>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--background-light-color-2);
  padding: 0.5rem 2rem;
  color: var(--primary-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  a {
    text-decoration: none;
  }
  /* &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  } */
  &:hover {
    box-shadow: 2px 0px 4px var(--primary-color),
      -2px 0px 4px var(--primary-color), 0px -2px 4px var(--primary-color),
      0px 2px 4px var(--primary-color);
    color: var(--primary-color);
  }
`;
export default PrimaryButton;
