import firebase from 'firebase/app';

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId
};

export default function FirebaseCreds () {
    firebase.initializeApp(config)
}