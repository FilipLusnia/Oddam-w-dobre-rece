import React, {useState} from 'react';
import {
    Link
} from "react-router-dom";

import LoginRouting from "./Routing/LoginRouting"
import HomeButton from "./Routing/HomeButton"

import decor from '../assets/Decoration.svg';


export default function Login() {

    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [emailBorder, setEmailBorder] = useState();
    const [passwordBorder, setPasswordBorder] = useState();

    const errStyle = {color: "red"};
    const errBorder = {borderColor: "red"};

    const handleClick = (e)=> {
        e.preventDefault();

        if (emailVal.includes("@") === false || emailVal.includes(".") === false || emailVal < 5){
            setEmailErr("Podano zły email!")
            setEmailBorder(errBorder);
        } else {
            setEmailErr("");
            setEmailBorder();
        }

        if(passwordVal.length < 6){
            setPasswordErr("Hasło musi zawierać conajmniej 6 znaków!")
            setPasswordBorder(errBorder);
        } else {
            setPasswordErr("");
            setPasswordBorder();
        }
    }

    return (
        <div>
            <div className="header">
                <LoginRouting/>
                <div className="login_home_btn_container">
                    <HomeButton/>
                </div>
            </div>
            <div className="login_section">
                <div className="login_container">
                    <h1>Zaloguj się</h1>
                    <img src={decor} alt="" className="login_decor"></img>
                    <form className="login_form">
                        <div className="login_form_container">
                            <label className="login_email">
                                Email:
                                <input type="email" className="login_email_input" onChange={e=> setEmailVal(e.target.value)} style={emailBorder}/>
                                <p style={errStyle}>{emailErr}</p>
                            </label>
                            <label className="login_password">
                                Hasło:
                                <input type="text" className="login_password_input" onChange={e=> setPasswordVal(e.target.value)} style={passwordBorder}/>
                                <p style={errStyle}>{passwordErr}</p>
                            </label>
                        </div>
                        <div className="login_buttons">
                            <Link to="/rejestracja" className="login_form_switch">Załóż konto</Link>
                            <input type="submit" className="login_btn" value="Zaloguj się" onClick={handleClick}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
