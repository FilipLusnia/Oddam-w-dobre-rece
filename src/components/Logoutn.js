import React from 'react';

import HomeButton from "./Routing/HomeButton"
import LoginRouting from "./Routing/LoginRouting"

import decor from '../assets/Decoration.svg';

export default function Logoutn() {
    return (
        <div>
            <LoginRouting/>
            <div>
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <img src={decor} alt="" className="login_decor"></img>
                <HomeButton/>
            </div>
        </div>
    )
  }