import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewContactForm(props){
  const firestore = useFirestore();

  function addContactToFirestore(event){
    event.preventDefault();
    props.onNewContactCreation();


      return firestore.collection('contact').add ({

        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        phoneNumber: event.target.phoneNumber.value,
        email: event.target.email.value,
        contract: event.target.contract.value,
        companyName: event.target.companyName.value,
        notes: event.target.notes.value,
        // contractClosed: event.target.contractClosed.value,
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={addContactToFirestore}
      contact={null}
      buttonText="Add Contact" />
    </React.Fragment>
  );
}

NewContactForm.propTypes = {
  onNewContactCreation: PropTypes.func
};

export default NewContactForm;