import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import Pinterest from "@material-ui/icons/Pinterest";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <Link to={item.internalLink}>
                <div className="portfolio-image">
                  <img src={item.image} alt="" />
                  <div className="container">
                    <div className="content">
                      <h6 className="title">{item.title}</h6>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      a {
        text-decoration: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
      }
      /*align several blocks in the center vertically of its container */
      .container {
        width: 100%;
        height: 100%;
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 0%;
        top: 0%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .content {
        width: 100%;
        margin: auto 0;
        opacity: 0;
      }
      h6,
      p {
        font-size: 0.9rem;
        width: 100%;
        color: var(--sidebar-dark-color);
      }
      h6 {
        font-size: 1rem;
        color: var(--background-dark-color);
        margin-bottom: 0;
      }

      .portfolio-image {
        transition: all 0.4s ease-in-out;
        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
        }
      }
      .portfolio-image:hover {
        cursor: pointer;
        .content {
          transform: translateY(0);
          transition: all 0.4s ease-in-out;
          opacity: 1;
        }

        &::before {
          height: 100%;
          width: 100%;
          background-color: white;
          opacity: 0.9;
          transform-origin: left;
          transition: 0.4s;
        }
      }
    }
  }
`;

export default Menu;
