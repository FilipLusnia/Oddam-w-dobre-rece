import React from 'react';
import { 
    Link, 
    Element} from 'react-scroll'

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
            {window.scrollTo(0, 0)}
            
            <div className="header">
                <div className="header-top">
                    <LoginRouting/>
                </div>
                <div className="header-bottom">
                    <Link className="start-button" to="Main" offset={100} smooth={true} duration={500} delay={60}>Start</Link>
                    <Link className="nav-button" to="SimpleSteps" smooth={true} duration={500} delay={60}>O co chodzi?</Link>
                    <Link className="nav-button" to="About" smooth={true} duration={600} delay={60}>O nas</Link>
                    <Link className="nav-button" to="WhoWeHelp" smooth={true} duration={700} delay={60}>Fundacja i organizacje</Link>
                    <Link className="nav-button" to="Footer" smooth={true} duration={800} delay={60}>Kontakt</Link>
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
