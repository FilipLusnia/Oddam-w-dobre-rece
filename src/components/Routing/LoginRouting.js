import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function LoginRouting() {
  return (
    <Router>
      <div className="header_login">
          <Link to="/logowanie">Login </Link>
          <Link to="/rejestracja">Rejestracja</Link>
      </div>
    </Router>
  )
}
