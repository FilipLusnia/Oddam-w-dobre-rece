import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import '../scss/main.scss';

import Home from './Home';
import Form from "./Form";
import Login from "./Login";
import Register from "./Register";
import Logoutn from "./Logoutn";


function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Start </Link>
              <Link to="/oddaj-rzeczy">Oddaj_Rzeczy </Link>
              <Link to="/logowanie">Login </Link>
              <Link to="/rejestracja">Rejestracja</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/oddaj-rzeczy">
            <Form />
          </Route>
          <Route exact path="/logowanie">
            <Login />
          </Route>
          <Route exact path="/rejestracja">
            <Register />
          </Route>
          <Route exact path="/wylogowano">
            <Logoutn />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App;
