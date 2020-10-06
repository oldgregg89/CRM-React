import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1>Customer Relations Manager Tracker</h1>
      <ul>
          <Link to="/">Home</Link><br></br>
          <Link to="/signin">Sign In</Link><br></br>
          <Link to="/signin">Sign Out</Link><br></br>
      </ul>
    </React.Fragment>
  );
}

export default Header
