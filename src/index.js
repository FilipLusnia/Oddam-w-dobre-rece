import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import FirebaseInit, { FirebaseContext } from './components/Firebase/FirebaseIndex';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <FirebaseContext.Provider value={new FirebaseInit()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
