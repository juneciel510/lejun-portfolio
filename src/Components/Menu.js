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
                  <div className="content">
                    <p className="title">{item.title}</p>
                    <p>{item.text}</p>
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
      h6 {
        margin-bottom: 0;
        /* @media screen and (max-width: 502px) {
          font-size: 1rem;
        } */
        transition: all 0.4s ease-in-out;
        /* &:hover {
          color: var(--primary-color);
        } */
      }

      img {
        width: 100%;
        /* height: 40vh; */
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
      }
      .content {
        /* transform: translateY(-600px); */
        width: 100%;
        height: 100%;
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 0%;
        top: 15%;
        opacity: 0;
        padding: 0.5rem 0.5rem;
        font-size: 0.9rem;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
      }
      h6,
      p {
        font-size: 0.8rem;
        text-align: left;
        padding-bottom: 0;
        /* margin: auto 0; */
        width: 100%;
        /* align-items: center; */
        color: var(--sidebar-dark-color);
      }
      .title {
        font-weight: 900;
        color: var(--background-dark-color);
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

          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
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
          color: ;
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
        &::before {
          height: 100%;
          width: 100%;
          background-color: white;
          opacity: 0.9;
          transform-origin: left;

          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export default Menu;
