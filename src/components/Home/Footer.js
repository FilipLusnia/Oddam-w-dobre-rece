import React, {useState, useEffect} from 'react';

import decor from '../../assets/Decoration.svg';


export default function Footer() {

    const [nameVal, setNameVal] = useState("");
    const [emailVal, setEmailVal] = useState("");
    const [textVal, setTextVal] = useState(""); 
    const [messageData, setMessageData] = useState({})

    const [nameBorder, setNameBorder] = useState();
    const [emailBorder, setEmailBorder] = useState();
    const [textBorder, setTextBorder] = useState();

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [textErr, setTextErr] = useState("");
    const [err, setErr] = useState(false)
    const [succesMess, setSuccesMess] = useState("")

    useEffect(()=> {

        setMessageData({
            name: nameVal,
            email: emailVal,
            message: textVal,
        })

        if(nameVal.length < 3 || 
           nameVal.indexOf(" ") >= 0 ||
           emailVal.includes("@") === false ||
           emailVal.includes(".") === false ||
           emailVal < 5 ||
           textVal.length < 120
        ){
            setErr(true);
        } else {
            setErr(false);
        }
        
    }, [nameVal, emailVal, textVal, err]);

    const handleClick = (e)=> {
        e.preventDefault();

        if(nameVal.length < 3 || nameVal.indexOf(" ") >= 0){
            setNameErr("Podano złe imię!")
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

        if(textVal.length < 120){
            setTextErr("Wiadomość musi zawierać conajmniej 120 znaków!")
            setTextBorder(errBorder);
        } else {
            setTextErr("");
            setTextBorder();
        }

        if((nameVal.length > 0 && emailVal.length > 0 && textVal.length > 0) && err === false){
            fetch (`https://fer-api.coderslab.pl/v1/portfolio/contact`,
            {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messageData)
            })
            .then(resp=> {
                if(resp.status === 200){
                    setSuccesMess("Wiadomość została wysłana! Wkrótce się skontaktujemy.")
                } 
            })
        }
    }

    const errStyle = {color: "red"};
    const errBorder = {borderColor: "red"};

    return (
        <div className="footer">
            <div className="contact_container">
                <h1>Skontaktuj się z nami</h1>
                <img src={decor} alt="" className="about_decor"></img>
                <h4>{succesMess}</h4>
                <form className="footer_contact">
                    <div className="contact_data">
                        <label className="contact_data name">
                            Wpisz swoje imię:
                            <input type="text" className="contact_data name_input" onChange={e=> setNameVal(e.target.value)} style={nameBorder} placeholder="Imię"/>
                            <p style={errStyle}>{nameErr}</p>
                        </label>
                        <label className="contact_data email">
                            Wpisz swój e-mail:
                            <input type="email" className="contact_data email_input" onChange={e=> setEmailVal(e.target.value)} style={emailBorder} placeholder="xyz@abc.pl"/>
                            <p style={errStyle}>{emailErr}</p>
                        </label>
                    </div>
                    <label className="contact_text">
                        Wpisz swoją wiadomość:
                        <textarea onChange={e=> setTextVal(e.target.value)} style={textBorder} placeholder="Napisz swoją wiadomość."></textarea>
                        <p style={errStyle}>{textErr}</p>
                    </label>
                    <input type="submit" className="contact_btn" value="Wyślij" onClick={handleClick}/>
                </form>
            </div>
            <div className="footer_bottom">
                <p>Copyright by Coders Lab</p>
            </div>
        </div>
    )
}