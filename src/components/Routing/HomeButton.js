import React from 'react';
import {
  Link
} from "react-router-dom";

export default function HomeButton() {
  return (

        <div className="home_btn_container">
            <Link to="/" className="home_btn">Strona Główna</Link>
        </div>
 
  )
}
