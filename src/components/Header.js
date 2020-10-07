import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1>Customer Relations Manager Tracker</h1>
        <p>
          <Link to="/">Home</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signin">Sign Out</Link>
        </p>
    </React.Fragment>
  );
}

export default Header
