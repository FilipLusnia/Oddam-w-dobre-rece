import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import { ReactComponent as Decor } from '../../assets/Decoration.svg';
import { ReactComponent as Logo1 } from '../../assets/Icon-1.svg';
import { ReactComponent as Logo2 } from '../../assets/Icon-2.svg';
import { ReactComponent as Logo3 } from '../../assets/Icon-3.svg';
import { ReactComponent as Logo4 } from '../../assets/Icon-4.svg';

export default function SimpleSteps() {

    return (
        <div className="steps">
            <div className="steps_head">
                <h1 className="steps_head_title">Wystarczą 4 proste kroki</h1>
                <div className="steps_head_decor"><Decor/></div>
            </div> 
            <div className="steps_items">
                <div className="steps_item one">
                    <Logo1/>
                    <h1>Wybierz rzeczy</h1>
                    <h1>_______</h1>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps_item two">
                    <Logo2/>
                    <h1>Spakuj je</h1>
                    <h1>_______</h1>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps_item three">
                    <Logo3/>
                    <h1>Zamów kuriera</h1>
                    <h1>_______</h1>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="steps_item four">
                    <Logo4/>
                    <h1>Zamów kuriera</h1>
                    <h1>________</h1>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps_button">
                <Router>
                    <Link to="/oddaj-rzeczy" className="steps_button text">ODDAJ RZECZY</Link>
                </Router>
            </div>
        </div>
    )
}