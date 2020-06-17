import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home/Home';
import Login from './Login';
import Register from './Register';
import Form from './Form/Form';
import Logoutn from './Logoutn';

import {FirebaseContext} from "./Firebase/FirebaseIndex"

import '../scss/main.scss';


export default function App() {

  const {currUser, signOut} = useContext(FirebaseContext);

  const [registeredMess, setRegisteredMess] = useState("");

  useEffect(() => {
    
  }, [])

  const isRegisteredMess = (e) => {
    setRegisteredMess(e);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logowanie" 
          render={(props) => <Login {...props} registeredMess={registeredMess} />}
        />
        <Route exact path="/rejestracja" 
          render={(props) => <Register {...props} isRegisteredMess={isRegisteredMess} />}
        />
        <Route exact path="/oddaj-rzeczy" component={Form} />
        <Route exact path="/wylogowano" component={Logoutn} />
      </Switch>
    </Router>
  )
}