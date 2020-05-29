import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

export default class Firebase{
    constructor(){
      firebase.initializeApp(config)

      this.fbauth = firebase.auth();
      
      this.fbdatabase = firebase.database();
    }

    shoutInLog = e =>{
      console.log("Firebase shouted: " + e);
    }
}

