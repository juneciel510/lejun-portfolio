import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import WeatherPage from "./Pages/WeatherPage";
import Blog1 from "./Pages/Blog1";
import Blog2 from "./Pages/Blog2";
import Blog3 from "./Pages/Blog3";
import Blog4 from "./Pages/Blog4";
import Portfolio1 from "./Pages/Portfolio1";
import Portfolio2 from "./Pages/Portfolio2";
import Portfolio3 from "./Pages/Portfolio3";
import Portfolio4 from "./Pages/Portfolio4";
import Portfolio5 from "./Pages/Portfolio5";
import ComingSoon from "./Pages/ComingSoon";
import ComingSoon2 from "./Pages/ComingSoon2";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Switch as Switching } from "react-router";
import Switch from "@material-ui/core/Switch";
import { IconButton } from "@material-ui/core";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        {/* <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div> */}

        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/weather" exact>
            <WeatherPage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/blog1" exact>
            <Blog1 />
          </Route>
          <Route path="/blog2" exact>
            <Blog2 />
          </Route>
          <Route path="/blog3" exact>
            <Blog3 />
          </Route>
          <Route path="/blog4" exact>
            <Blog4 />
          </Route>
          {/* {portfolios.map((item, index) => (
            <Route path={item.internalLink} exact>
              <Portfolio id={index} />
            </Route>
          ))} */}
          <Route path="/portfolio1" exact>
            <Portfolio1 />
          </Route>
          <Route path="/portfolio2" exact>
            <ComingSoon2 />
          </Route>
          <Route path="/portfolio3" exact>
            <ComingSoon />
          </Route>
          <Route path="/portfolio4" exact>
            <ComingSoon />
          </Route>
          <Route path="/portfolio5" exact>
            <ComingSoon2 />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
