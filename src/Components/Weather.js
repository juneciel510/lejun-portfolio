import React from "react";
import styled from "styled-components";

const Weather = (props) => {
  return (
    <WeatherStyled>
      <div className="container ">
        <div className="Card">
          <h2 className=" py-3">{props.cityname}</h2>
          <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`} />
          </h5>

          {/* Get Celsius */}
          {props.temp_celsius ? (
            <h2 className="py-2">{props.temp_celsius}&deg;</h2>
          ) : null}

          {/* show max and min temp */}
          {maxminTemp(props.temp_min, props.temp_max)}

          {/* Weather description */}
          <h4 className="py-3">
            {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}
          </h4>
        </div>
      </div>
    </WeatherStyled>
  );
};

const WeatherStyled = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 3rem;
  color: unset;
  color: var(--white-color);
  height: 100%;
  .container {
    .card {
      h2 {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 670px) {
    margin-top: 0rem;
  }
`;
export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
