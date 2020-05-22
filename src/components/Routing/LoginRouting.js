import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function LoginRouting() {
  return (
    <Router>
      <div>
          <Link to="/logowanie" className="header-top text">Zaloguj</Link>
          <Link to="/rejestracja" className="header-top text-register">Załóż konto</Link>
      </div>
    </Router>
  )
}
