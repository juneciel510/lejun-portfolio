import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/avatar.jpg";
import sidebar1 from "../img/sidebar1.jpg";
import WeatherButton from "./WeatherButton";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="nav-items">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active-class" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active-class" exact>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" activeClassName="active-class" exact>
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" activeClassName="active-class" exact>
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active-class" exact>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <p>
          @2025 <b>Lejun Chen</b>
        </p>
        <WeatherButton className="weather" />
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 100%;
    text-align: center;
    padding-left: 0;
    .active-class {
      background-color: var(--background-light-color-2);
      color: white;
    }

    li {
      width: 100%;
      display: block;
      padding-left: 0;
      a {
        text-decoration: none;
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0 0rem 0;
      font-size: 1rem;
      display: block;
      text-align: center;
      margin-bottom: 0rem;
    }
    .weather {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    a {
      font-size: 0.8rem;
    }
    footer p,
    b {
      font-size: 0.8rem;
    }
  }
`;
export default Navigation;
