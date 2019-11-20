import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UsersList from "./components/users-list.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="" target="_blank">
              <img src={logo} width="30" height="30" alt="" />
            </a>
            <Link to="/" className="navbar-brand">Record App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">User</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create User</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={UsersList} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/create" component={CreateUser} />
        </div>
      </Router>
    );
  }
}

export default App;
