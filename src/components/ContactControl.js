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
          companyName: contact.get("companyName"),
          notes: contact.get("notes"),
          contractClosed: contact.get("contractClosed"),
          id: contact.id
        }
      this.setState({SelectedItem: firestoreContact });
    });
  }

  handleClick = () => {
    if (this.state.SelectedItem !=null) {
      this.setState({
        editing: false,
        SelectedItem: null
      });
    } else {
      const { dispatch } = this.props
      const action = c.toggleForm()
      dispatch(action)
    }
  }

  handleClickEdit = (id) => {
    this.setState({
      editing: true
    })
  }

  render() {
    let CurrentVisableState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h3>You need to be signed in to use this application</h3>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser !=null)) {
      if(this.state.editing){
        CurrentVisableState = <EditContactForm onEditContact={this.handleEditContact} contact={this.state.SelectedItem}></EditContactForm>
        buttonText= "PlaceHolder"
      } else if (this.state.SelectedItem !== null) {
        CurrentVisableState = <ContactDetail contact={this.state.SelectedItem} onClickingDelete={this.handleDeleteContact} onClickingEdit={this.state.handleClickEdit}></ContactDetail>
        buttonText= "Return"
      } else if (this.props.FormSwitch) {
        CurrentVisableState = <NewContactForm onNewContactCreation={this.}
      }
    }
  }

}