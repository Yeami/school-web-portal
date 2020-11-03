import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComponent from "./LoginComponent";

export default function RouterComponent() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <hr/>
        <Switch>
          <Route exact path="/login">
            <LoginComponent/>
          </Route>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}