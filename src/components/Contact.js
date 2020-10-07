import React from "react";
import PropTypes from "prop-types";

function Contact(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenContactClicked(props.id)}>
        <h3>{props.firstName}-{props.lastName}-{props.companyName}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Contact.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  contract: PropTypes.number.isRequired,
  companyName:PropTypes.string.isRequired,
  notes: PropTypes.string,
  // contractClosed: PropTypes.bool,
  id:PropTypes.string,
  whenContactClicked:PropTypes.func
};

export default Contact;