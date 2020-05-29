import React, {useState, useEffect} from 'react';
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
        <>
            <div>
                <LoginRouting/>
                <HomeButton/>
                login
            </div>

            <div className="">
                <h1>Zaloguj się</h1>
                <img src={decor} alt="" className="login_decor"></img>
                <form className="">
                    <div className="">
                        <label className="">
                            Email:
                            <input type="email" className="" onChange={e=> setEmailVal(e.target.value)} style={emailBorder}/>
                            <p style={errStyle}>{emailErr}</p>
                        </label>
                        <label className="">
                            Hasło:
                            <input type="text" className="" onChange={e=> setPasswordVal(e.target.value)} style={passwordBorder}/>
                            <p style={errStyle}>{passwordErr}</p>
                        </label>
                    </div>
                    <Link to="/rejestracja" className="">Załóż konto</Link>
                    <input type="submit" className="" value="Zaloguj" onClick={handleClick}/>
                </form>
            </div>
        </>
    );
}
