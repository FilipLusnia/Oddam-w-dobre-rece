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
        <Route exact path="/" component={Home} />
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja" component={Register} />
        <Route exact path="/oddaj-rzeczy" component={Form} />
        <Route exact path="/wylogowano" component={Logoutn} />
      </Switch>
    </Router>
  )
}
