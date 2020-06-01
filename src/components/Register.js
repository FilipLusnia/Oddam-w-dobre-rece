import React, {useState, useEffect, useContext} from 'react';
import {
    Link,
    useHistory
} from "react-router-dom";
import {FirebaseContext} from "./Firebase/FirebaseIndex"

import LoginRouting from "./Routing/LoginRouting"
import HomeButton from "./Routing/HomeButton"

import decor from '../assets/Decoration.svg';


export default function Register({isRegisteredMess}) {

    const {signUpWithEmailAndPass, signOut} = useContext(FirebaseContext);
    const customHistory = useHistory();

    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [password2Val, setPassword2Val] = useState("");

    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [password2Err, setPassword2Err] = useState("");
    const [err, setErr] = useState(false);

    const [emailBorder, setEmailBorder] = useState();
    const [passwordBorder, setPasswordBorder] = useState();
    const [password2Border, setPassword2Border] = useState();
    const errStyle = {color: "red"};
    const errBorder = {borderColor: "red"};

    useEffect(()=> {

        if(emailVal.indexOf("@") === -1 ||
        emailVal.indexOf(".") === -1 ||
        passwordVal.length < 6 ||
        password2Val !== passwordVal
        ){
            setErr(true);
        } else {
            setErr(false);
        } 

    }, [emailVal, passwordVal, password2Val, err]);

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

        if((emailVal.length > 0 && 
            passwordVal.length > 0 && 
            password2Val.length > 0) && 
            err === false){
            
            signUpWithEmailAndPass(emailVal, passwordVal)
            .then(resp => {
                if(resp){
                    signOut();
                    customHistory.push("/logowanie");
                    isRegisteredMess("Zarejestrowałeś się pomyślnie. Teraz możesz się zalogować.");
                }
            })
            .catch(e => {
                if(e.message === "The email address is already in use by another account."){
                    setEmailErr("Konto z takim emailem już istnieje!")
                    console.log(e);
                } else {
                    setEmailErr(e.message)
                }
            })  
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
            <div className="register_section">
                <div className="register_container">
                    <h1>Załóż konto</h1>
                    <img src={decor} alt="" className="register_decor"></img>
                    <form className="register_form">
                        <div className="register_form_container">
                            <label className="register_email">
                                Email:
                                <input type="email" className="register_email_input" onChange={e=> setEmailVal(e.target.value)} style={emailBorder}/>
                                <p style={errStyle}>{emailErr}</p>
                            </label>
                            <label className="register_password">
                                Hasło:
                                <input type="text" className="register_password_input" onChange={e=> setPasswordVal(e.target.value)} style={passwordBorder}/>
                                <p style={errStyle}>{passwordErr}</p>
                            </label>
                            <label className="register_password2">
                                Powtórz hasło:
                                <input type="text" className="register_password2_input" onChange={e=> setPassword2Val(e.target.value)} style={password2Border}/>
                                <p style={errStyle}>{password2Err}</p>
                            </label>
                        </div>
                        <div className="register_buttons">
                            <Link to="/logowanie" className="register_form_switch">Zaloguj</Link>
                            <input type="submit" className="register_btn" value="Załóż konto" onClick={handleClick}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
