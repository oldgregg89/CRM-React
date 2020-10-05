import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function ContactDetail(props){
  return (
    <React.Fragment>
      <h1><strong>Contact Details</strong></h1>
      <p><strong>First Name:</strong>{props.contact.firstName}</p>
    </React.Fragment>
  );
}