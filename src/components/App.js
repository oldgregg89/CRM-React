import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactControl from "./ContactControl";
import Container from "react-bootstrap/Container";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App(){
  return (
    <React.Fragment>
      <Router>
          <Header />
        <Container style={{ marginTop: '150px'}}>
          <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
            <Route path="/">
              <ContactControl />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;