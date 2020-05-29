import React, {useState, useEffect} from 'react';
import {
    Link
} from "react-router-dom";

import LoginRouting from "./Routing/LoginRouting"
import HomeButton from "./Routing/HomeButton"

import decor from '../assets/Decoration.svg';


export default function Register() {

    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [password2Val, setPassword2Val] = useState("");

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [password2Err, setPassword2Err] = useState("");
    const [emailBorder, setEmailBorder] = useState();
    const [passwordBorder, setPasswordBorder] = useState();
    const [password2Border, setPassword2Border] = useState();

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

        if(password2Val !== passwordVal){
            setPassword2Err("Hasła powinny być takie same!")
            setPassword2Border(errBorder);
        } else {
            setPassword2Err("");
            setPassword2Border();
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
                        <label className="">
                            Powtórz hasło:
                            <input type="text" className="" onChange={e=> setPassword2Val(e.target.value)} style={password2Border}/>
                            <p style={errStyle}>{password2Err}</p>
                        </label>
                    </div>
                    <Link to="/logowanie" className="">Zaloguj</Link>
                    <input type="submit" className="" value="Załóż konto" onClick={handleClick}/>
                </form>
            </div>
        </>
    );
}
