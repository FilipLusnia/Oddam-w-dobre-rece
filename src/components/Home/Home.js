import React from 'react';
import * as Scroll from 'react-scroll';
import { 
    Link, 
    Element , 
    Events, 
    animateScroll as scroll, 
    scrollSpy, 
    scroller } from 'react-scroll'

import LoginRouting from '../Routing/LoginRouting'

import Main from "./Main"
import YellowColumns from "./YellowColumns"
import SimpleSteps from "./SimpleSteps"
import About from "./About"
import WhoWeHelp from "./WhoWeHelp"

export default function Home() {

    return (
        <>
            <div className="header">
                <div className="header-top">
                    <LoginRouting/>
                </div>
                <div className="header-bottom">
                    <button className="start-button">Start</button>
                    <button>O co chodzi?</button>
                    <button>O nas</button>
                    <button>Fundacja i organizacje</button>
                    <button>Kontakt</button>
                </div>
            </div>
            <Main/>
            <YellowColumns/>
            <SimpleSteps/>
            <About/>
            <WhoWeHelp/>
        </>
    )
}
