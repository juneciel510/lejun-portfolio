import React from "react";
import styled from "styled-components";
const Popup = (props) => {
  return (
    <PopupBoxStyled>
      <div className="supersizer"></div>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </PopupBoxStyled>
  );
};

const PopupBoxStyled = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 5rem;
  text-align: center;
  color: white;
  /* make background opacity */
  .supersizer {
    background: var(--background-dark-grey);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    opacity: 0.7;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    top: 0;
  }
  .box {
    position: relative;
    width: 10rem;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(120vh - 85vh - 20px);
    background: var(--primary-color-light);
    opacity: 1;
    border-radius: 4px;
    padding: 15px 15px 15px 5px;
    border: 1px solid #999;
    overflow: auto;
    color: white;
    z-index: 1;
  }

  .close-icon {
    color: black;
    content: "x";
    cursor: pointer;
    position: fixed;
    left: 55%;
    right: calc(15% - 30px);
    top: calc(120vh - 85vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
  }
  button {
    background-color: var(--background-dark-grey);

    color: white;
    border: 3px solid red;
    h6 {
      margin: 5px 5px 0px 5px;
      font-size: 1rem;
    }
  }
`;

export default Popup;
