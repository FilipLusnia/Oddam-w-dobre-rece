import React, { useState, useEffect, useContext } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home/Home';
import Login from './Login';
import Register from './Register';
import Form from './Form/Form';
import Logoutn from './Logoutn';

import {FirebaseContext} from "./Firebase/FirebaseIndex"
import {ProvideAuth} from "./Firebase/ProvideAuth"

import '../scss/main.scss';


export default function App() {

  const {fbauth} = useContext(FirebaseContext);
  const [ ,setAuthUser] = useContext(ProvideAuth);

  const [registeredMess, setRegisteredMess] = useState("");

  useEffect(() => {
    fbauth.onAuthStateChanged(user => {
      if (user) {
          setAuthUser(user);
      } else {
          setAuthUser(null);
      }
    });
  }, [fbauth, setAuthUser])

  const isRegisteredMess = (e) => {
    setRegisteredMess(e);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logowanie" 
          render={props => <Login {...props} registeredMess={registeredMess} />}
        />
        <Route exact path="/rejestracja" 
          render={props => <Register {...props} isRegisteredMess={isRegisteredMess} />}
        />
        <Route exact path="/oddaj-rzeczy" component={Form} />
        <Route exact path="/wylogowano" component={Logoutn} />
      </Switch>
    </Router>
  )
}