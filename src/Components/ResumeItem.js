import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
  return (
    <ResumeItemStyled>
      {/* {year && (
        <div className="left-content">
          <p>{year}</p>
        </div>
          )} */}
      <div className="left-content">
        <h6>{year}</h6>
      </div>

      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        {text.map((ele) => (
          <p>{ele}</p>
        ))}
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  h5 {
    /* font-size: 1.2rem; */
  }
  @media screen and (max-width: 502px) {
    display: block;
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
    @media screen and (max-width: 502px) {
      padding-bottom: 0.7rem;
    }
  }
  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    h5 {
      color: var(--primary-color);
    }
    @media screen and (max-width: 502px) {
      margin-top: 1rem;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
      @media screen and (max-width: 502px) {
        width: 0rem;
      }
    }
    @media screen and (max-width: 502px) {
      padding-left: 0.8rem;
    }
  }
`;
export default ResumeItem;
