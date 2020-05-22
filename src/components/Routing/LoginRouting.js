import React from 'react';
import {
  Link
} from "react-router-dom";

export default function LoginRouting() {
  return (
      <div>
          <Link to="/logowanie" className="header-top text">Zaloguj</Link>
          <Link to="/rejestracja" className="header-top text-register">Załóż konto</Link>
      </div>
  )
}
