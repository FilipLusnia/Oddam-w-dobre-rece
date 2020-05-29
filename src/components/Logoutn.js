import React from 'react';

import HomeButton from "./Routing/HomeButton"
import LoginRouting from "./Routing/LoginRouting"

import decor from '../assets/Decoration.svg';

export default function Logoutn() {
    return (
        <>
            <div className="header">
                    <LoginRouting/>
            </div>
            <div className="logout_container">
                <div className="logout_info">
                    <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                    <img src={decor} alt="" className="login_decor"></img>
                    <HomeButton/>
                </div>
            </div>
        </>
    )
  }