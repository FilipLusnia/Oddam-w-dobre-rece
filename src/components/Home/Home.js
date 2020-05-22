import React from 'react';
import * as Scroll from 'react-scroll';
import { 
    Link, 
    Element , 
    animateScroll as scroll, 
    duration,
    scroller } from 'react-scroll'

import LoginRouting from '../Routing/LoginRouting'

import Main from "./Main"
import YellowColumns from "./YellowColumns"
import SimpleSteps from "./SimpleSteps"
import About from "./About"
import WhoWeHelp from "./WhoWeHelp"
import Footer from "./Footer"

export default function Home() {

    return (
        <>
            <div className="header">
                <div className="header-top">
                    <LoginRouting/>
                </div>
                <div className="header-bottom">
                    <Link className="start-button" to="Main" smooth={true} duration={500} delay={80}>Start</Link>
                    <Link className="nav-button" to="SimpleSteps" smooth={true} duration={500} delay={80}>O co chodzi?</Link>
                    <Link className="nav-button" to="About" smooth={true} duration={600} delay={80}>O nas</Link>
                    <Link className="nav-button" to="WhoWeHelp" smooth={true} duration={700} delay={80}>Fundacja i organizacje</Link>
                    <Link className="nav-button" to="Footer" smooth={true} duration={800} delay={80}>Kontakt</Link>
                </div>
            </div>
            
            <Element name="Main"><Main/></Element>
            <YellowColumns/>
            <Element name="SimpleSteps"><SimpleSteps/></Element>
            <Element name="About"><About/></Element>
            <Element name="WhoWeHelp"><WhoWeHelp/></Element>
            <Element name="Footer"><Footer/></Element>
        </>
    )
}
