import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import Pinterest from "@material-ui/icons/Pinterest";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      <div class="items">
        {menuItem.map((item) => {
          return (
            <div className="portfolio-content">
              <Link to={item.internalLink}>
                <div className="portfolio-image">
                  <img src={item.image} alt="" />
                  <div className="content-container">
                    <div className="content">
                      <h6 className="title">{item.title}</h6>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`
  display: flex;
  justify-content: center;
  .items {
    max-width: 2800px;
    display: inline-grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0rem;
    @media screen and (max-width: 2100px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 862px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  /* 3D effect */
  .portfolio-content {
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
  }

  .portfolio-content {
    position: relative;
    overflow: hidden;
    border-radius: 7px;
    max-width: 400px;
    min-width: 340px;
    margin: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s ease-in-out;
      margin: 0;
    }
    .content-container {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0%;
      top: 0%;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: auto 0;
    }
    .content {
      width: 100%;
      transition: all 0.5s ease-in-out;
      opacity: 1;
      text-align: justify;
      transform: translateY(86%);
      height: 100%;
      justify-content: center;
    }
    a {
      display: block;
      text-decoration: none;
      width: 100%;
      height: 100%;
      margin: 0;
    }
    h6,
    p {
      font-size: 0.9rem;
      text-align: left;
      margin: 10px;
      color: var(--primary-color);
      display: block;
    }
    .title {
      padding: 0;
      margin-top: 1%;
      font-size: inherit;
    }

    .portfolio-image {
      transition: all 0.4s ease-in-out;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: var(--background-dark-color);
        opacity: 0.8;
        transform: translateY(86%);
        transition: 0.5s;
      }
    }

    .portfolio-image:hover {
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      .content {
        transform: translateY(0);
        transition: all 0.4s ease-in-out;
      }

      &::before {
        height: 100%;
        width: 100%;
        transform: translateY(0);
        opacity: 0.9;
      }
    }
  }
`;

export default Menu;
