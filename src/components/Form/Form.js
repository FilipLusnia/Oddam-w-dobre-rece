import React from 'react';

import LoginRouting from '../Routing/LoginRouting'
import HomeButton from "../Routing/HomeButton"
import Footer from "../Home/Footer"


export default function Form() {
    return (
        <>
            <div className="header">
                    <LoginRouting/>
                <div className="register_home_btn_container">
                    <HomeButton/>
                </div>
            </div>
            <div>
                <div className="form_main">
                    <div className="form_main_img"></div>
                    <div className="form_main_title">
                        <h1>Oddaj rzeczy, których nie chcesz<br/>POTRZEBUJĄCYM</h1>
                        <div className="form_title_decor"></div>
                        <p>Wystarczą 4 proste kroki:</p>
                        <div className="form_title_squares">
                            <div className="form_title_square">
                                <h2>1</h2>
                                <h3>Wybierz rzeczy</h3>
                            </div>
                            <div className="form_title_square">
                                <h2>2</h2>
                                <h3>Spakuj je w worki</h3>
                            </div>
                            <div className="form_title_square">
                                <h2>3</h2>
                                <h3>Wybierz fundację</h3>
                            </div>
                            <div className="form_title_square">
                                <h2>4</h2>
                                <h3>Zamów kuriera</h3>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div>

            </div>
            <>
                <Footer />
            </>
        </>
    )
}
