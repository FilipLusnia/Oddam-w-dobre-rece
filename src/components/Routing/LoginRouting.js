import React from 'react';
import {
  Link
} from "react-router-dom";

export default function LoginRouting() {
  return (
      <div>
          <Link to="/logowanie" className="login_text">Zaloguj</Link>
          <Link to="/rejestracja" className="register_text">Załóż konto</Link>
      </div>
  )
}
