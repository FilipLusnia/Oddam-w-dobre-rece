import React from 'react';
import {
    Link
} from "react-router-dom";

export default function Main() {

    return (
        <div className="main">
            <div className="main_img"></div>

            <div className="main_title">
                <h1>Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="title_decor"></div>
                <div className="title_buttons">
                    <div className="title_button">
                        <Link to="/oddaj-rzeczy" className="title_button text">ODDAJ RZECZY</Link>
                    </div>
                    <div className="title_button">
                        <Link to="/" className="title_button text">ZORGANIZUJ ZBÓRKĘ</Link>
                    </div>
                </div>
            </div>
        </div> 
    )
}
