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
            <div className="portfolio-content card">
              <Link to={item.internalLink}>
                <div className="portfolio-image imgBx">
                  <img src={item.image} alt="" />
                  {/* <ul>
                    <li>
                      <a href={item.link1}>
                        <GitHub />
                      </a>
                    </li>
                    <li>
                      <a href={item.link2}>
                        <Pinterest />
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="contentBx">
                  <div className="content">
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                  </div>
                </div>

                {/* <h6>{item.title}</h6> */}
              </Link>
              {/* <p>{item.text}</p> */}
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
      /* display: block; */
      position: relative;
      a {
        text-decoration: none;
      }
      h6 {
        color: black;
        margin-top: 1rem;
        font-size: 1.1rem;
        @media screen and (max-width: 502px) {
          font-size: 1rem;
        }
      }
    }
  }
  .card {
    position: relative;
    overflow: hidden;
  }
  .content .card .contentBx {
    width: 100%;
    height: 100%;
    color: black;
    position: absolute;
    top: 0;
    left: 0;
  }
  .grid-item .card .imgBx img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .grid-item .card .contentBx::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: white;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: left;
  }

  .grid-item .card .contentBx .content {
    position: relative;
    padding: 30px;
    /* z-index: 1; */
    opacity: 0;
    transition: 0.5s;
    transform: translate(-300px);
  }
  /* .grid-item .card:hover .contentBx::before {
    transform: scaleX(1);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
    .grid-item .card .contentBx .content {
      z-index: 10;
    }
  } */
  .grid-item .card:hover {
    .contentBx::before {
      transform: scaleX(1);
      transition: transform 0.5s ease-in-out;
      transform-origin: right;
    }
  }
  .grid-item .card .contentBx .content {
    transform: translateX(0px);
  }
  .grid-item .card .contentBx .content:hover {
    .grid-item .card .contentBx .content {
      opacity: 1;
    }
  }
`;

export default Menu;
