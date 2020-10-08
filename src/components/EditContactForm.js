import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditContactForm(props){
  const { contact } = props
  const firestore = useFirestore();
  function handleEditContactFormSubmission(event) {
      event.preventDefault();
      props.onEditContact();
      console.log("here")
      const propertiesToUpdate = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        phoneNumber: event.target.phoneNumber,
        email: event.target.email,
        contract: event.target.contract,
        companyName: event.target.companyName,
        notes: event.target.notes,
      }
     
      return firestore.update({collection: "contact", doc: contact.id}, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditContactFormSubmission}
        contact={contact}
        buttonText="Update Contact" />
    </React.Fragment>
  );
}

EditContactForm.propTypes = {
  onEditContact:PropTypes.func
};

export default EditContactForm;