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
                <div className="">
                    <div className="">
                        <h3>Adres odbioru:</h3>
                        <div>
                            <label>
                                Ulica
                                <input type="text" value={dataStack.street}
                                    onChange={handleInfo('street')}/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Miasto
                                <input type="text" value={dataStack.city}
                                    onChange={handleInfo('city')}/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Kod pocztowy
                                <input type="text" value={dataStack.zipCode}
                                    onChange={handleInfo('zipCode')}/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Numer telefonu
                                <input type="tel" value={dataStack.phone}
                                    onChange={handleInfo('phone')}/>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h3>Termin odbioru:</h3>
                        <div>
                            <label>
                                Data
                                <input type="date" value={dataStack.date}
                                    onChange={handleInfo('date')}/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Godzina
                                <input type="text" value={dataStack.time}
                                    onChange={handleInfo('time')}/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Uwagi dla kuriera
                                <textarea rows="8" value={dataStack.courierNotes}
                                        onChange={handleInfo('courierNotes')}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="form_btn_container">
                <button onClick={handlePrevPage} className="form_btn">wstecz</button>
                <button onClick={validateData} className="form_btn">dalej</button>
            </div>
        </>
    )
}