import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyD2KJeXAddNRoWeIXaYyupi3_g5U4MnizY",
  authDomain: "owdr-82da9.firebaseapp.com",
  databaseURL: "https://owdr-82da9.firebaseio.com",
  projectId: "owdr-82da9",
  storageBucket: "owdr-82da9.appspot.com",
  messagingSenderId: "153906792365",
  appId: "1:153906792365:web:28f3237522c1edc02dc324"
};

firebase.initializeApp(config)


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
