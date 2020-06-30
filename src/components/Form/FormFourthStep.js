import React from 'react';

export default function FormFourthStep({handleNextPage, handlePrevPage, handleInfo, dataStack}) {

    const validateData = () =>{

        if (dataStack.street <= 4){
                alert("Wpisz właściwą nazwę ulicy.")
            } else if (dataStack.city <= 4){
                alert("Wpisz właściwą nazwę miasta.")
            } else if (!dataStack.zipCode.match(/^[0-9]{2}-[0-9]{3}$/)){
                alert("Wpisz kod pocztowy we właściwym formacie (xx-xxx).")
            } else if (!dataStack.phone.match(/^([0-9]{9})$/)){
                alert("Wpisz numer telefonu we właściwym formacie (xxxyyyzzz).")
            } else if (!dataStack.date){
                alert("Wybierz datę.")
            } else if (!dataStack.time.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)){
                alert("Wpisz godzinę we właściwym formacie (hh:mm).")
            } else {
                handleNextPage();
        }
    }

    return(
        <>
            <div className="form_warn">
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>

            <div className="form_fourth_container">
                <p>Krok 4/4</p>

                <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                <div className="form_fourth_inputs">
                    <div className="form_fourth_left">
                        <h3>Adres odbioru:</h3>
                        <div className="form_fourth_input_container">
                            <label>
                                Ulica
                                <input type="text" value={dataStack.street}
                                    onChange={handleInfo('street')}/>
                            </label>
                        </div>

                        <div className="form_fourth_input_container">
                            <label>
                                Miasto
                                <input type="text" value={dataStack.city}
                                    onChange={handleInfo('city')}/>
                            </label>
                        </div>

                        <div className="form_fourth_input_container">
                            <label>
                                Kod <br/> pocztowy
                                <input type="text" value={dataStack.zipCode}
                                    onChange={handleInfo('zipCode')}
                                    maxlength="6"/>
                            </label>
                        </div>

                        <div className="form_fourth_input_container">
                            <label>
                                Numer <br/> telefonu
                                <input type="tel" value={dataStack.phone}
                                    onChange={handleInfo('phone')}
                                    maxlength="9"/>
                            </label>
                        </div>
                    </div>

                    <div className="form_fourth_right">
                        <h3>Termin odbioru:</h3>
                        <div className="form_fourth_input_container">
                            <label>
                                Data
                                <input type="date" value={dataStack.date}
                                    onChange={handleInfo('date')}/>
                            </label>
                        </div>

                        <div className="form_fourth_input_container">
                            <label>
                                Godzina
                                <input type="text" value={dataStack.time}
                                    onChange={handleInfo('time')}
                                    placeholder="hh:mm"
                                    maxlength="5"/>
                            </label>
                        </div>

                        <div className="form_fourth_input_container">
                            <label>
                                Uwagi <br/> dla kuriera
                                <textarea rows="4" cols="27" value={dataStack.courierNotes}
                                        onChange={handleInfo('courierNotes')}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="form_btn_container">
                <button onClick={handlePrevPage} className="form_btn">Wstecz</button>
                <button onClick={validateData} className="form_btn">Dalej</button>
            </div>
        </>
    )
}