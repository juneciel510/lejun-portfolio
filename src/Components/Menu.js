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
      border-radius: 7px;
      img {
        width: 100%;
        /* height: 40vh; */
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
      }
      .container {
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
        /* transform: translateY(-600px); */
        width: 100%;
        transition: all 0.5s ease-in-out;
        opacity: 1;
        /* padding: 0.5rem 0.5rem; */
        /* margin: auto 0; */
        text-align: justify;
        transform: translateY(85%);
        height: 100%;
      }
      a {
        text-decoration: none;
      }
      h6,
      p {
        font-size: 0.9rem;
        text-align: left;
        /* padding-bottom: 0; */
        width: 100%;
        color: var(--primary-color);
        display: block;
        position: relative;
        /* text-align: justify; */
      }
      .title {
        padding: 0;
        margin-top: 1%;
        font-size: inherit;
        /* text-align: reverted; */
      }
      /* ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            } */

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
          height: 100%;
          width: 100%;
          transform: translateY(85%);
          transition: 0.5s;
        }
      }
      .portfolio-image:hover {
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        .content {
          transform: translateY(0);
          /* transform: translate(-50%, -50%); */
          /* display: flex; */
          /* align-items: center;
          justify-content: center; */
          transition: all 0.4s ease-in-out;
          opacity: 1;
        }
        &::before {
          height: 100%;
          width: 100%;
          transform: translateY(0);
          opacity: 0.9;
        }
        /* ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }

          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        } */
      }
    }
  }
`;

export default Menu;
