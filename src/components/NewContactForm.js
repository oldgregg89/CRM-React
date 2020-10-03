import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewDiveLogForm(props){
  const firestore = useFirestore();

  function addContactToFirestore(event){
    event.preventDefault();
    props.onNewContactCreation();


      return firestore.collection('contact').add ({

        
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={addContactToFirestore}
      diveLog={null}
      buttonText="Add Contact" />
    </React.Fragment>
  );
}

NewContactForm.propTypes = {
  onNewContactCreation: PropTypes.func
};

export default NewDiveLogForm;