import React from "react";
import { Link } from "react-router-dom";
import RoseLogo from "../assets/RoseWebsiteWhite.png";
// Anna add a headlines here?
function NavBar() {
  return (
    <nav>
      <header>
        <Link to="/">
        <h1>
          Conover <img src={RoseLogo} alt="roseLogo" /> Chronicle
        </h1>
        </Link>
      </header>
      <hr />
      <ul>
        <li>
          <Link to="/Sports">Sports</Link>
        </li>
        <li>
          <Link to="/Weather">Weather</Link>
        </li>
        <li>
          <Link to="/Politics">Politics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
