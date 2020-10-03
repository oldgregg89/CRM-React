import React from "react";
import PropTypes from "prop-types";

function Contact(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenContactClicked(props.id)}>
        <h3></h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Contact.PropTypes = {
  
}
