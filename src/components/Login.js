import React, {useState, useEffect, useContext} from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";
import {FirebaseContext} from "./Firebase/FirebaseIndex"

import LoginRouting from "./Routing/LoginRouting"
import HomeButton from "./Routing/HomeButton"

import decor from '../assets/Decoration.svg';


export default function Login({registeredMess}) {

    const {signInWithEmailAndPass} = useContext(FirebaseContext);
    const customHistory = useHistory();

    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [err, setErr] = useState(false);
    const [emailBorder, setEmailBorder] = useState();
    const [passwordBorder, setPasswordBorder] = useState();

    const [showRegisteredMess, setShowRegisteredMess] = useState("");

    const errStyle = {color: "red"};
    const errBorder = {borderColor: "red"};

    useEffect(()=> {
        setShowRegisteredMess(registeredMess);
    }, [registeredMess]);

    useEffect(()=> {

        if(emailVal.indexOf("@") === -1 ||
        emailVal.indexOf(".") === -1 ||
        passwordVal.length < 6
        ){
            setErr(true);
        } else {
            setErr(false);
        } 

    }, [emailVal, passwordVal, err]);

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

        if((emailVal.length > 0 && 
            passwordVal.length > 0) && 
            err === false){
            
            signInWithEmailAndPass(emailVal, passwordVal)
            .then(resp => {
                if(resp){
                    setShowRegisteredMess("")
                    customHistory.push("/");
                }
            })
            .catch(e => {
                if(e.message === "There is no user record corresponding to this identifier. The user may have been deleted."){
                    setEmailErr("Konto z tym emailem nie istnieje.");
                    setEmailBorder(errBorder);
                } else if(e.message === "The password is invalid or the user does not have a password."){
                    setPasswordErr("Błędne hasło.");
                    setPasswordBorder(errBorder);
                } 
            })  
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
                    <p>{showRegisteredMess}</p>
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
