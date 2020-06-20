import React, {useState, useContext} from 'react';
import {
    Link
} from "react-router-dom";

import LoginRouting from '../Routing/LoginRouting'
import HomeButton from "../Routing/HomeButton"
import Footer from "../Home/Footer"

import FormFirstStep from "./FormFirstStep"
import FormSecondStep from "./FormSecondStep"
import FormThirdStep from "./FormThirdStep"
import FormFourthStep from "./FormFourthStep"
import FormSummary from "./FormSummary"
import FormThankYou from "./FormThankYou"

import {ProvideAuth} from "../Firebase/ProvideAuth"

export default function Form() {

    const [authUser] = useContext(ProvideAuth);

    const [step, setStep] = useState(1);

    const info = {
        clothesCheck: false, trashClothesCheck: false, toysCheck: false,
        booksCheck: false, otherCheck: false,

        bagsAmount: "-wybierz-",

        localization: "-wybierz-", targetGroup: false, organization: "",

        street: "",
        city: "",
        zipCode: "",
        phone: "",
        date: "",
        time: "",
        courierNotes: ""
    }

    const [dataStack, setDataStack] = useState(info);

    const handleNextPage = () => {
        setStep(prev => prev + 1);
    }

    const handlePrevPage = () => {
        setStep(prev => prev - 1);
    }

    const handleInfo = input => e => {
        const name = input;
        const value = e.target.value;
        setDataStack(prev => {return{...prev, [name]: value}})
    }

    const handleCheck = input => e => {
        const name = input;
        const value = e.target.checked;
        setDataStack(prev => {return{...prev, [name]: value}})
    }

    const formSwitch = () => {
        switch(step) {
            case 1:
                return(
                    <FormFirstStep 
                        handleNextPage={handleNextPage}
                        handleCheck={handleCheck}
                        dataStack={dataStack}
                    />
                )
            case 2:
                return(
                    <FormSecondStep 
                        handleNextPage={handleNextPage} 
                        handlePrevPage={handlePrevPage}
                        handleInfo={handleInfo}
                        dataStack={dataStack}
                    />
                )
            case 3:
                return(
                    <FormThirdStep 
                        handleNextPage={handleNextPage} 
                        handlePrevPage={handlePrevPage}
                        handleInfo={handleInfo}
                        handleCheck={handleCheck}
                        dataStack={dataStack}
                    />
                )
            case 4:
                return(
                    <FormFourthStep 
                        handleNextPage={handleNextPage} 
                        handlePrevPage={handlePrevPage}
                        handleInfo={handleInfo}
                    />
                )
            case 5:
                return(
                    <FormSummary 
                        handleNextPage={handleNextPage} 
                        handlePrevPage={handlePrevPage}
                    />
                )
            case 6:
                return(
                    <FormThankYou/>
                )
            default: return "Napotkano błąd";
        }
    }

    return (
        <>
            <div className="header">
                    <LoginRouting/>
                <div className="register_home_btn_container">
                    <HomeButton/>
                </div>
            </div>
            <>
                <div className="form_head">
                    <div className="form_head_img"></div>
                    <div className="form_head_title">
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
            </>
            <>
                {authUser !== null
                ? 
                <div className="form_main">
                    {formSwitch()}
                </div>
                : 
                <div className="form_main_alternative">
                    <h2>Aby wypełnić formularz, musisz być zalogowany.</h2>
                    <Link to="/logowanie" className="form_main_alternative login-btn">Zaloguj się</Link>
                    <Link to="/logowanie" className="form_main_alternative register-btn">Nie masz konta? Załóż je.</Link>
                </div>
                } 
            </>
            <>
                <Footer />
            </>
        </>
    )
}
