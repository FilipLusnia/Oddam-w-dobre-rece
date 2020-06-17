import React from 'react';
import {
  Link
} from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll'

export default function HomeButton() {

  const handleClick = () => {
    scroll.scrollToTop();
  }

  return (

        <div className="home_btn_container">
            <Link to="/" onClick={handleClick} className="home_btn">Strona Główna</Link>
        </div>
  )
}
