import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const WeatherButton = () => {
  return (
    <WeatherButtonStyled>
      <Link to="weather">Weather</Link>
    </WeatherButtonStyled>
  );
};

const WeatherButtonStyled = styled.div`
  margin-bottom: 1rem;
  text-align: center;

  a {
    font-size: 0.8rem;
    text-decoration: none;
    padding: 0.1rem 0.8rem;
    color: white;
    background-color: var(--weather);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: #fca503;
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
export default WeatherButton;
