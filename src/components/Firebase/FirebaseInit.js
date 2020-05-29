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

export default function FirebaseCreds () {
    firebase.initializeApp(config)
}