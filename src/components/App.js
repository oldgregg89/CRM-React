import React from "react";
import Header from "./Header";
import ContactControl from "./ContactControl";
import Container from "react-bootstrap/Container";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
      </Router>
    </React.Fragment>
  );
}

export default App;