import React, {useState, useContext, useEffect} from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";
import {FirebaseContext} from "../Firebase/FirebaseIndex"

export default function LoginRouting() {

  const customHistory = useHistory();

  const {signOut, currUser} = useContext(FirebaseContext);

  const handleClick = () => {
    signOut();
    window.location.reload();
    customHistory.push("/");
  }

  if (currUser?.email !== undefined){
    return(
      <div className="logout_nav">
        <p>Zalogowano jako: <span>{currUser?.email}</span></p>
        <Link to="/oddaj-rzeczy" className="logout_form">ODDAJ RZECZY</Link>
        <button onClick={handleClick} className="logout_btn">Wyloguj</button>
      </div>
    )
  } else {
    return(
      <div>
        <Link to="/logowanie" className="login_text">Zaloguj</Link>
        <Link to="/rejestracja" className="register_text">Załóż konto</Link>
      </div>
    )
  }
}
