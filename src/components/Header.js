import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <React.Fragment>
      <h1>Customer relations manager Tracker</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signin">Sign Out</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header
