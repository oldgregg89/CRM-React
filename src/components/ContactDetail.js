import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function ContactDetail(props){
  return (
    <React.Fragment>
      <h1><strong>Contact Details</strong></h1>
      <p><strong>First Name:</strong>{props.contact.firstName}</p>
      <p><strong>Last Name:</strong>{props.contact.lastName}</p>
      <p><strong>Phone Number:</strong>{props.contact.phoneNumber}</p>
      <p><strong>Email:</strong>{props.contact.email}</p>
      <p><strong>Current Contract Worth:</strong>{props.contact.contract}</p>
      <p><strong>Company Name:</strong>{props.contact.companyName}</p>
      <p><strong>Notes:</strong>{props.contact.notes}</p>
      <p><strong>Contract Closed (T/F):</strong>{props.contact.contractClosed}</p>

      <Button style={{margin: 10}} variant="success" onClick={props.onClickingEdit}>Edit Contact</Button>
      <Button variant="danger" onClick={() => props.onClickingDelete(props.contact.id) }>Delete Contact</Button>
      <hr/>
    </React.Fragment>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default ContactDetail;