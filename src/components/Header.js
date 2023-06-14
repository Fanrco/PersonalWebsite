import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TypeWriter from "./TypeWriter";
import logo from "../images/whitelogo.png";
import { useState } from "react";

const Header = ({ setTitle, title }) => {
  const [menu, setMenu] = useState(false);

  function hideMenu() {
    const checkbox = document.getElementById("menu-toggle");
    checkbox.checked = false;
  }

  return (
    <div className="header">
      <div id="header-l">
        <div className="linkbox">
          <Link to="/">
            <img width="20px" src={logo} alt="f logo" />
          </Link>
        </div>

        <div className="linkbox">
          <a href="https://github.com/Fanrco" target="_blank">
            <FontAwesomeIcon size="xl" icon={faGithub} />
          </a>
        </div>

        <div className="linkbox">
          <a href="https://twitter.com/fanr_co" target="_blank">
            <FontAwesomeIcon size="xl" icon={faTwitter} />
          </a>
        </div>

        <div className="linkbox">
          <a href="https://www.linkedin.com/in/francomiranda/" target="_blank">
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div id="header-c">
        <TypeWriter target={title} />
      </div>

      <div id="header-r">
        <div id="links">
          <div className="linkbox">
            <Link to="/">HOME</Link>
          </div>
          <div className="linkbox">
            <Link to="/About">ABOUT</Link>
          </div>
          <div className="linkbox">
            <Link to="/Projects">PROJECTS</Link>
          </div>
          <div className="linkbox">
            <Link to="/Blog">BLOG</Link>
          </div>
        </div>
      </div>

      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>

      <ul className="menu">
        <li >
          <div className="linkboxmenu">
            <a href="https://github.com/Fanrco" target="_blank">
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          </div>

          <div className="linkboxmenu">
            <a href="https://twitter.com/fanr_co" target="_blank">
              <FontAwesomeIcon size="xl" icon={faTwitter} />
            </a>
          </div>

          <div className="linkboxmenu">
            <a
              href="https://www.linkedin.com/in/francomiranda/"
              target="_blank"
            >
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </a>
          </div>
        </li>

        <li>
          <Link to="/" onClick={hideMenu}>
            <div className="linkboxmenu">HOME</div>
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={hideMenu}>
            <div className="linkboxmenu">ABOUT</div>
          </Link>
        </li>
        <li>
          <Link to="/Projects" onClick={hideMenu}>
            <div className="linkboxmenu">PROJECTS</div>
          </Link>
        </li>
        <li>
          <Link to="/Blog" onClick={hideMenu}>
            <div className="linkboxmenu">BLOG</div>
          </Link>
        </li>
      </ul>

      <div id="mobile-logo">
        <Link to="/">
          <img width="20px" src={logo} alt="f logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
