import firebase from "firebase/app";
import { withRouter } from 'react-router-dom';
import React, { useState } from "react";

function SignIn(props) {

  const [ viewSwitch, setViewSwitch ] = useState(true);
  const [ buttonText, setButtonText] = useState("Sign Up")

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
      props.history.push("/")
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      props.history.push("/")
    }).catch(function(error) {
      console.log(error.message);
    });
  }


  const doSignOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      this.props.history.push("/")
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  const [ signInView, setSignInView ] = useState(
    <React.Fragment>
      <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' /><br></br><br></br>
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' /><br></br><br></br>
          <button type='submit' variant="primary">Sign in</button>
        </form><br></br><br></br>
        <h1>Sign Out</h1>
        <button variant="primary" onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  )
  const doSwitchView = () => {
    if (viewSwitch === true) {
      setSignInView(
        <React.Fragment>
          <h1>Sign up</h1>
          <form onSubmit={doSignUp}>
            <input
            type='text'
            name='name'
            placeholder='name' /><br></br><br></br>
            <input
            type='text'
            name='company'
            placeholder='company' /><br></br><br></br>
            <input
            type='text'
            name='email'
            placeholder='email' /><br></br><br></br>
            <input
            type='password'
            name='password'
            placeholder='Password' /><br></br><br></br>
            <button type='submit' variant="primary">Sign up</button>
          </form><br></br><br></br>
          <h1>Sign Out</h1>
          <button variant="primary" onClick={doSignOut}>Sign out</button>
        </React.Fragment>)
        setViewSwitch(false)
        setButtonText("Go Back")
    } else {
      setSignInView(
        <React.Fragment>
      <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' /><br></br><br></br>
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' /><br></br><br></br>
          <button type='submit' variant="primary">Sign in</button>
        </form>
      </React.Fragment>)
      setViewSwitch(true)
      setButtonText("Sign Up")
    }
  }
  
return (
    <React.Fragment>
      {signInView}
      <button type = 'button' varient='primary' onClick={doSwitchView}>{buttonText}</button>
    </React.Fragment>
  )
}

export default withRouter(SignIn)