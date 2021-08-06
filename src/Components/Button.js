import React from "react";
import styled from "styled-components";

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.4rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 2.3rem;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }

  &:not(:last-child) {
    margin-right: 0.6rem;
    @media screen and (max-width: 502px) {
      margin-right: 0.2rem;
    }
  }
  @media screen and (max-width: 502px) {
    margin-bottom: 0.6rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.9rem;
  }
`;
const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 0rem auto;
  @media screen and (max-width: 502px) {
    margin-bottom: 1rem;
  }
`;
export default Button;
