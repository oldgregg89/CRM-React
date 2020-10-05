import React from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded} from 'react-redux-firebase';

function ContactList(props){
  useFirestoreConnect([
    { collection: 'contact' }
  ]);

  const contacts = useSelector(state => state.firestore.ordered.diveLog);

  if (isLoaded(contacts)) {

    return (
      <React.Fragment>
        <hr/>
        {diveLogs.map((contact) => {
          return <Contact
          whenContactClicked = { props.onContactSelection }
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          email={contact.email}
          contract={contact.contract}
          companyName={contact.companyName}
          notes={contact.notes}
          contractClosed={contact.contractClosed}
          id={contact.id}
          key={contact.id} />
        })}
      </React.Fragment> 
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

ContactList.propTypes = {
  onContactSelection:PropTypes.func
};

export default ContactList;