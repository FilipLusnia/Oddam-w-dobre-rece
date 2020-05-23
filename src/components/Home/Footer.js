import React, {useState, useEffect} from 'react';

import decor from '../../assets/Decoration.svg';


export default function Footer() {

    const [nameVal, setNameVal] = useState("");
    const [emailVal, setEmailVal] = useState("");
    const [textVal, setTextVal] = useState(""); 

    const [nameBorder, setNameBorder] = useState();
    const [emailBorder, setEmailBorder] = useState();
    const [textBorder, setTextBorder] = useState();

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState();
    const [textErr, setTextErr] = useState("");
    const [succesMess, setSuccesMess] = useState("")

    useEffect(()=> {

    }, []);

    const handleClick = (e)=> {
        e.preventDefault();

        if(nameVal.length < 3){
            setNameErr("Podaj więcej niż 3 znaki!")
            setNameBorder(errBorder);
        } else if(isNaN(nameVal) === false){
            setNameErr("To pole nie powinno zawierać cyfr!")
            setNameBorder(errBorder);
        } else {
            setNameErr("")
            setNameBorder();
        }

        if (emailVal.includes("@") === false || emailVal.includes(".") === false || emailVal < 5){
            setEmailErr("Podano zły email!")
            setEmailBorder(errBorder);
        } else {
            setEmailErr("");
            setEmailBorder();
        }

        if(textVal < 120){
            setTextErr("Wiadomość musi zawierać conajmniej 120 znaków!")
            setTextBorder(errBorder);
        } else {
            setTextErr("");
            setTextBorder();
        }
    }

    const errStyle = {color: "red"};
    const errBorder = {borderColor: "red"};

    return (
        <div className="footer">
            <div className="form_container">
                <h1>Skontaktuj się z nami</h1>
                <img src={decor} alt="" className="about_decor"></img>
                <form className="footer_form">
                    <div className="form_data">
                        <label className="form_data name">
                            Wpisz swoje imię:
                            <input type="text" className="form_data name_input" onChange={e=> setNameVal(e.target.value)} style={nameBorder} placeholder="Imię"/>
                            <p style={errStyle}>{nameErr}</p>
                        </label>
                        <label className="form_data email">
                            Wpisz swój e-mail:
                            <input type="email" className="form_data email_input" onChange={e=> setEmailVal(e.target.value)} style={emailBorder} placeholder="xyz@abc.pl"/>
                            <p style={errStyle}>{emailErr}</p>
                        </label>
                    </div>
                    <label className="form_text">
                        Wpisz swoją wiadomość:
                        <textarea onChange={e=> setTextVal(e.target.value)} style={textBorder} placeholder="Napisz swoją wiadomość."></textarea>
                        <p style={errStyle}>{textErr}</p>
                    </label>
                    <input type="submit" className="form_btn" value="Wyślij" onClick={handleClick}/>
                </form>
            </div>
            <div className="footer_bottom">
                <p>Copyright by Coders Lab</p>
            </div>
        </div>
    )
}