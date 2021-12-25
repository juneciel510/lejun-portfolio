import React from "react";
import styled from "styled-components";

const Form = (props) => {
  return (
    <FormStyled>
      <div className="container h-100">
        <form onSubmit={props.loadweather}>
          <div>{props.error ? error() : ""}</div>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                autoComplete="on"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                autoComplete="on"
              />
            </div>
            <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
    </FormStyled>
  );
};

const error = (props) => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

const FormStyled = styled.div`
  color: var(--white-color);
  input {
    background-color: var(--background-light-color-2);
    color: var(--white-color);
  }
  .btn {
    color: var(--white-color);
    background-color: var(--weather);
  }
`;

export default Form;
