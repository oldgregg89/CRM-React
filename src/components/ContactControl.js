import React from "react";
import { connect } from "react-redux"
import PropTypes from "prop-types"
import ContactList from "./ContactList"
import NewContactForm from "./NewContactForm"
import ContactDetail from "./ContactDetail"
import EditContactForm from "./EditContactForm"
import * as c from '../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class ContactControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedItem: null,
      editing: false
    }
  }

  handleAddNewContact = (newContact) => {
    console.log("working")
    const { dispatch } = this.props;
    const action = c.toggleForm();
    dispatch(action);
  }

  handleEditContact = () => {
    this.setState({
      editing:false,
      SelectedItem: null
    });
  }

  handleDeleteContact = (id) => {
    this.props.firestore.delete({collection: "contact", doc: id});
    this.setState({SelectedItem: null});
  }

  handleDeleteContact = (id) => {
    const {dispatch} = this.props;
    const action = {
      type = 'DELETE_CONTACT',
      id: id
    }
    dispatch(action);
    this.setState({SelectedItem: null});
  }

  handleChangedSelectedContact = (id) => {
      this.props.firestore.get({collection:'contact',doc: id}).then((contact) => {
        const firestoreContact = {
          firstName: contact.get("firstName"),
          lastName: contact.get("lastName"),
          phoneNumber: contact.get("phoneNumber"),
          email: contact.get("email"),
          contract: contact.get("contract"),
          
        }
      this.setState({SelectedItem: firestoreContact });
    });
  }

}