import React from "react";
import { Link} from "react-router-dom";
// Anna add a headlines here?
function NavBar() {
  return (
    <nav>
      <h1>TEK News</h1>
      <span>Add your &lt;Link/&gt;'s to the Pages Here in the NavBar</span>
      <p>
        You will need to use React Router's Navigation system as opposed to 'a'
        tags to achieve proper client side routing
      </p>
      <ul>
        <li>
          <Link
            to="/Sports"
          >
            Sports
          </Link>
        </li>
        <li>
        <Link
            to="/Weather"
          >
            Weather
          </Link>
        </li>
        <li>
        <Link
            to="/Politics"
          >
            Politics
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
