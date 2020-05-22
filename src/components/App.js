import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Home/Home';
import Login from './Login';
import Register from './Register';
import Form from './Form';
import Logoutn from './Logoutn';

import '../scss/main.scss';

export default function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/logowanie">
            <Login/>
        </Route>
        <Route exact path="/rejestracja">
            <Register/>
        </Route>
        <Route exact path="/oddaj-rzeczy">
            <Form/>
        </Route>
        <Route exact path="/wylogowano">
            <Logoutn/>
        </Route>
      </Switch>
    </Router>
  )
}
