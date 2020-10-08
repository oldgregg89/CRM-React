import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <React.Fragment>
      <div className='headerClass'>
        <h1>Customer Relations Manager Tracker</h1>
          <p>
            <Link to="/">Home</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signin">Sign Out</Link>
          </p>
      </div>
    </React.Fragment>
  );
}

export default Header
